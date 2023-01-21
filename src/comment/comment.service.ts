import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Car } from 'src/car/car.model';
import { CarService } from 'src/car/car.service';
import { Customer } from 'src/customer/model/customer.model';
import { Comment } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
    @InjectModel(Car) private carRepository: typeof Car,
    // @InjectModel(Customer) private customerRepository: typeof Customer,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    // const customer = await this.customerRepository.findByPk(
    //   createCommentDto.customer_id,
    // );
    // if (!customer) {
    //   throw new HttpException('User topilmadi', HttpStatus.NOT_FOUND);
    // }
    // const car = await this.carRepository.findByPk(createCommentDto.car_id);
    // if (!car) {
    //   throw new HttpException('car topilmadi', HttpStatus.NOT_FOUND);
    // }
    const comment = await this.commentRepository.create(createCommentDto);

    let ratings = [];
    if (createCommentDto.rating) {
      ratings = await this.commentRepository.findAll({
        where: {
          [Op.and]: [
            { car_id: createCommentDto.car_id },
            { rating: { [Op.ne]: 0 } },
          ],
        },
      });
    }
    let total_rating = 0;
    if (ratings.length) {
      const sum = ratings.reduce((a: number, b: IRating) => {
        return a + b.rating;
      }, 0);
      total_rating = sum / ratings.length;
    }
    const carPrice = await this.carRepository.findByPk(createCommentDto.car_id);
    carPrice.total_rating = +total_rating.toFixed(2);
    carPrice.save();
    return comment;
  }
  async getAllComments() {
    const comments = await this.commentRepository.findAll({
      include: { all: true },
    });
    return comments;
  }
}
interface IRating {
  rating: number;
}
