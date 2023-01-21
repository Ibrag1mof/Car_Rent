import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Car } from 'src/car/car.model';
import { Customer } from '../../customer/model/customer.model';

interface cartAttr {
  ticket_id: number;
  customer_id: number;
  finishedAt: Date;
}
@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, cartAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Car)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  car_id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  @Column({
    type: DataType.DATE,
    defaultValue: new Date(new Date().getTime() + 30 * 60000),
  })
  finishedAt: Date;

  @BelongsTo(() => Car)
  car: Car;

  @BelongsTo(() => Customer)
  customer: Customer;
}
