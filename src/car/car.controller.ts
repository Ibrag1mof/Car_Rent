import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Car } from './car.model';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// @ApiTags('Avtomobillar')
// @Controller('car')
// export class CarController {
//   constructor(private readonly carService: CarService) {}
//   @ApiOperation({ summary: 'Avtomobil qo`shish' })
//   @ApiResponse({ status: 200, type: Car })
//   @Post()
//   @UseInterceptors(FileInterceptor('image'))
//   create(@Body() createCarDto: CreateCarDto, @UploadedFile() image) {
//     return this.carService.create(createCarDto, image);
//   }

//   @ApiOperation({ summary: 'Avtomobillarni olish' })
//   @ApiResponse({ status: 200, type: Car })
//   @Get()
//   getAll() {
//     return this.carService.getCars();
//   }

//   @ApiOperation({ summary: 'Avtomobilni yangilash' })
//   @ApiResponse({ status: 200, type: Car })
//   @Put('/:id')
//   @UseInterceptors(FileInterceptor('image'))
//   update(
//     @Body() updateCarDto: UpdateCarDto,
//     @UploadedFile() image,
//     @Param('id') id: number,
//   ) {
//     return this.carService.update(updateCarDto, image);
//   }
//   @ApiOperation({ summary: 'Avtomobilni o`chirish' })
//   @ApiResponse({ status: 200, type: Car })
//   @Delete('/:id')
//   delete(@Param('id') id: number) {
//     return this.carService.delete(id);
//   }
// }

@ApiTags('Car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: 'car post qilish' })
  @ApiResponse({ status: 201, type: Car })
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(@Body() createCarDto: CreateCarDto, @UploadedFile() image: any) {
    console.log('12321');
    return this.carService.create(createCarDto, image);
  }

  @ApiOperation({ summary: 'Carlarni get qilish' })
  @ApiResponse({ status: 200, type: [Car] })
  @Get()
  findAll() {
    return this.carService.getCars();
  }

  @ApiOperation({ summary: 'Carni get qilish' })
  @ApiResponse({ status: 200, type: Car })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }

  @ApiOperation({ summary: 'Car patch qilish' })
  @ApiResponse({ status: 202, type: Car })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @ApiOperation({ summary: 'Car delete qilish' })
  @ApiResponse({ status: 203, type: Car })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.delete(+id);
  }
}
