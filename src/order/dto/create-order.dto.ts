import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'Car id si' })
  @IsNumber()
  @IsNotEmpty()
  readonly car_id: number;
  @ApiProperty({ example: 1, description: 'Customer id si' })
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @ApiProperty({ example: '2022-01-19', description: 'Berilgan vaqti' })
  @IsDateString()
  readonly start_date: Date;
  @ApiProperty({ example: '2022-01-22', description: 'Olish vaqti' })
  @IsDateString()
  readonly end_date: Date;
  total_price: number;
}
