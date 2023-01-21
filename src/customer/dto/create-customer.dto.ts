import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Sanjar', description: 'firstname' })
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;
  @ApiProperty({ example: 'Ibragimov', description: 'lastname' })
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;
  @ApiProperty({ example: '998906777376', description: 'phone' })
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/i, {
    message: "phone O'zbekiston raqamiga mos emas",
  })
  readonly phone: string;
  @ApiProperty({ example: '123456', description: 'password' })
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  readonly password: string;
  @ApiProperty({ example: '123456', description: 'confirm password' })
  @IsString()
  @IsNotEmpty()
  readonly confirm_password: string;
  @ApiProperty({ example: 'sanjar@gmail.com', description: 'email' })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: '1998-07-01', description: 'bithday' })
  @IsOptional()
  @IsDateString()
  readonly birth_date: Date;
}
