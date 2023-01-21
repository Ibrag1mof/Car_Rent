import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Car } from 'src/car/car.model';
import { Customer } from 'src/customer/model/customer.model';

interface OrderCreationAttrs {
  car_id: number;
  customer_id: number;
  start_date: Date;
  end_date: Date;
  total_price: number;
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, OrderCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  //=====================================================================
  @ApiProperty({ example: '1', description: 'Car id' })
  @ForeignKey(() => Car)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  car_id: number;
  //=====================================================================
  @ApiProperty({ example: '1', description: 'Customer id' })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  //=====================================================================
  @ApiProperty({
    example: '2022-03-31',
    description: 'Buyurtma boshlanish sanasi',
  })
  @Column({
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  start_date: Date;
  //=====================================================================
  @ApiProperty({
    example: '2022-04-01',
    description: 'Buyurtma tugash sanasi',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;
  //=====================================================================
  @ApiProperty({ example: '100000', description: 'Buyurtma umumiy narxi' })
  @Column({
    type: DataType.DECIMAL(13, 2),
    allowNull: false,
  })
  total_price: number;
  //=====================================================================
  @BelongsTo(() => Car)
  car: Car;

  @BelongsTo(() => Customer)
  consumer: Customer;
}
