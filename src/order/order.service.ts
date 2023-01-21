import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from 'src/car/car.model';
import { Customer } from 'src/customer/model/customer.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order, // @InjectModel(Customer) private customerRepository: typeof Customer,
  ) // @InjectModel(Car) private carRepository: typeof Car,
  {}

  async create(createOrderDto: CreateOrderDto) {
    // const customer = await this.customerRepository.findByPk(
    //   createOrderDto.customer_id,
    // );

    // if (!customer) {
    //   throw new HttpException('Customer topilmadi', HttpStatus.NOT_FOUND);
    // }
    // const car = await this.carRepository.findByPk(createOrderDto.car_id);
    // if (!car) {
    //   throw new HttpException('Car topilmadi', HttpStatus.NOT_FOUND);
    // }
    const startDate = new Date(createOrderDto.start_date).getTime();
    const endDate = new Date(createOrderDto.end_date).getTime();

    if (startDate - new Date().getTime() / 60 / 60 / 24 / 1000 < 0) {
      throw new HttpException(
        'boshlanish vaqti  kamida bugun bo`lishi kerak',
        HttpStatus.NOT_FOUND,
      );
    }
    const days: number = (endDate - startDate) / 60 / 60 / 24 / 1000;
    if (days < 1) {
      throw new HttpException(
        'tugash vaqti boshlanish vaqtidan kamida 1 kun keyin bo`lishi kerak',
        HttpStatus.NOT_FOUND,
      );
    }
    // createOrderDto.total_price = car.price * days;
    // console.log(createOrderDto);
    const order = await this.orderRepository.create(createOrderDto);
    await order.save();
    return order;
  }
  async getAllOrders() {
    const orders = await this.orderRepository.findAll({
      include: { all: true },
    });
    return orders;
  }
}
