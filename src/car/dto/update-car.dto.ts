import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Matches } from 'class-validator';

export class UpdateCarDto {
  @ApiProperty({ example: 'Gentra', description: 'Avtomobil nomi' })
  @IsOptional()
  @IsString()
  readonly name: string;
  @ApiProperty({
    example: 'Gentra haqida ma`lumot',
    description: 'Avtomobil haqida ma`lumot',
  })
  @IsOptional()
  @IsString()
  readonly description: string;
  @IsOptional()
  @ApiProperty({ example: '100000', description: 'Avtomobil narxi' })
  @Matches(/^[0-9]/i, { message: 'Narx son bo`lishi kerak' })
  readonly price: number;
}
