import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ example: 'Gentra', description: 'Avtomobil nomi' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({
    example: 'Gentra haqida ma`lumot',
    description: 'Avtomobil haqida ma`lumot',
  })
  @IsString()
  readonly description: string;
  @ApiProperty({ example: '100000', description: 'Avtomobil narxi' })
  @Matches(/^[0-9]/i, { message: 'Narx son bo`lishi kerak' })
  @IsNotEmpty()
  readonly price: number;
  @Matches(/^[0-9]/i, { message: 'Customer Id son bo`lishi kerak' })
  @ApiProperty({ example: 1, description: 'Customer ID' })
  @IsNotEmpty()
  readonly customer_id: number;
}
