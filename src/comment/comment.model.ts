import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Car } from 'src/car/car.model';
import { Customer } from 'src/customer/model/customer.model';

interface CommentCreationAttrs {
  car_id: number;
  customer_id: number;
  comment: string;
  rating: number;
}

@Table({ tableName: 'comment' })
export class Comment extends Model<Comment, CommentCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  //=====================================================================
  @ApiProperty({ example: 1, description: 'Car id' })
  @ForeignKey(() => Car)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  car_id: number;
  //=====================================================================
  @ApiProperty({ example: 1, description: 'Customer id' })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  //=====================================================================
  @ApiProperty({
    example: 'Bu yaxshi Car ekan',
    description: 'Car haqida fikrlar',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment: string;
  //=====================================================================
  @ApiProperty({
    example: 5,
    description: 'Carga qo`yilgan reyting',
  })
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  rating: number;
  //=====================================================================
  @BelongsTo(() => Car)
  car: Car;

  @BelongsTo(() => Customer)
  consumer: Customer;
}
