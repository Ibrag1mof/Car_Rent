import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateCustomerCardDto {
  @ApiProperty({ example: 1, description: 'customer_id' })
  @IsNumber()
  @IsNotEmpty()
  readonly customer_id: number;
  @ApiProperty({ example: 'Anor', description: 'name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({ example: '998906777376', description: 'phone' })
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @ApiProperty({ example: '1234123412341234', description: 'karta raqami' })
  @IsString()
  @IsNotEmpty()
  readonly number: string;
  @ApiProperty({ example: '2023', description: 'karta yili' })
  @IsString()
  @IsNotEmpty()
  readonly year: string;
  @ApiProperty({ example: '05', description: 'karta oyi' })
  @IsString()
  @IsNotEmpty()
  readonly month: string;
}
