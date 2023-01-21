import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 1, description: 'Avtomobil id si' })
  @IsNumber()
  @IsNotEmpty()
  readonly car_id: number;
  @ApiProperty({ example: 1, description: 'Customer id si' })
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @ApiProperty({
    example: 'Bu yaxshi Car ekan',
    description: 'Car haqida fikrlar',
  })
  @IsString()
  @IsNotEmpty()
  readonly comment: string;
  @ApiProperty({
    example: 5,
    description: 'Avtomobilga qo`yilgan reyting',
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  readonly rating: number;
}
