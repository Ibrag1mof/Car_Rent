import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from 'src/customer/model/customer.model';
import { FilesService } from 'src/files/files.service';
import { Car } from './car.model';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// @Injectable()
// export class CarService {
//   constructor(
//     @InjectModel(Car) private carRepository: typeof Car,
//     private readonly fileService: FilesService,
//   ) // @InjectModel(Customer) private customerRepository: typeof Customer,
//   {}

//   async create(createCarDto: CreateCarDto, image: any) {
//     if (await this.checkRent(+createCarDto.customer_id)) {
//       throw new HttpException('Customer topilmadi', HttpStatus.NOT_FOUND);
//     }
//     const fileName = await this.fileService.createFile(image);
//     const car = await this.carRepository.create({
//       total_rating: 0,
//       ...createCarDto,
//       price: +createCarDto.price,
//       image: fileName,
//       customer_id: +createCarDto.customer_id,
//     });
//     return car;
//   }

//   async getCars() {
//     return this.carRepository.findAll({
//       include: { all: true },
//     });
//   }

//   async update(updateCarDto: UpdateCarDto, image: any, id: number) {
//     const car = await this.carRepository.findByPk(id);
//     if (!car) {
//       throw new HttpException('Car topilmadi', HttpStatus.NOT_FOUND);
//     }
//     car.name = updateCarDto.name || car.name;
//     car.description = updateCarDto.description || car.description;
//     car.price = +updateCarDto.price || car.price;
//     if (image) {
//       await this.fileService.deleteFile(car.image);
//       car.image = await this.fileService.createFile(image);
//     }

//     await car.save();
//     return car;
//   }

//   async delete(id: number) {
//     const car = await this.carRepository.findByPk(id);
//     if (!car) {
//       throw new HttpException('Car topilmadi', HttpStatus.NOT_FOUND);
//     }
//     await this.carRepository.destroy({ where: { id } });
//     await this.fileService.deleteFile(car.image);
//     return car;
//   }

//   async checkRent(id: number) {
//     const car = await this.customerRepository.findByPk(id);
//     return car == null;
//   }
// }

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car) private carRepository: typeof Car,
    private readonly fileService: FilesService,
  ) {}
  async create(createCarDto: CreateCarDto, image: any) {
    // console.log("error shu yerda")
    const fileName = await this.fileService.createFile(image);
    // console.log(createEventDto.description)
    const car = await this.carRepository.create({
      ...createCarDto,
      image: fileName,
    });
    car.save();
    if (!car) {
      throw new BadRequestException('carni qo`shish jarayonida hatolik');
    }
    return event;
  }

  async getCars() {
    return await this.carRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return await this.carRepository.findByPk(+id);
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const check = await this.carRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id is incorrect', HttpStatus.BAD_REQUEST);
    }
    const newCar = await this.carRepository.update(
      {
        ...updateCarDto,
      },
      { where: { id: id }, returning: true },
    );
    return newCar;
  }

  async delete(id: number) {
    return await this.carRepository.destroy({
      where: {
        id: +id,
      },
    });
  }
}
