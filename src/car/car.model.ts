import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToAssociation,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Comment } from 'src/comment/comment.model';
import { Customer } from 'src/customer/model/customer.model';

interface CarCreationAttrs {
  name: string;
  price: number;
  image: string;
  total_rating: number;
  customer_id: number;
}

@Table({ tableName: 'Car' })
export class Car extends Model<Car, CarCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Gentra', description: 'Avtomobil nomi' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'Gentra haqida ma`lumot',
    description: 'Avtomobil haqida ma`lumot',
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ApiProperty({ example: '100000', description: 'Avtomobil narxi' })
  @Column({
    type: DataType.DECIMAL(13, 2),
    allowNull: false,
  })
  price: number;

  @ApiProperty({
    example: 'images/default.png',
    description: 'Avtomobil rasmi',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;

  @ApiProperty({ example: '4.7', description: 'Avtomobil reytingi' })
  @Column({
    type: DataType.DOUBLE,
  })
  total_rating: number;

  @ApiProperty({ example: '1', description: 'Customer ID' })
  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @ApiProperty({ example: 'true', description: 'Avtomobil faolligi' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: number;

  @HasMany(() => Comment)
  comments: Comment[];
}
