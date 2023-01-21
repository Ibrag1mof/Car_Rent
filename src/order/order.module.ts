import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.model';
import { JwtModule } from '@nestjs/jwt';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [SequelizeModule.forFeature([Order]), JwtModule],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService],
})
export class OrderModule {}
