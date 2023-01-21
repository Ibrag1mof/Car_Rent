import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Country } from '../../country/model/country.model';
import { Customer } from '../../customer/model/customer.model';

interface CustAdressAttr {
  customer_id: number;
  name: string;
  country_id: number;
  street: string;
  house: string;
  flast: string;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'customer_address' })
export class Customer_Address extends Model<Customer_Address, CustAdressAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Country)
  country_id: number;

  @Column({
    type: DataType.STRING,
  })
  street: string;
  @Column({
    type: DataType.STRING,
  })
  house: string;
  @Column({
    type: DataType.INTEGER,
  })
  flat: number;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.TEXT,
  })
  info: string;

  @BelongsTo(() => Customer)
  customer: Customer;
  @BelongsTo(() => Country)
  country: Country;
}
