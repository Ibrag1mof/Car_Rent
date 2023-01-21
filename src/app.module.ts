import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { AdminModule } from './admin/admin.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Admin } from './admin/model/admin.model';
import { Cart } from './cart/model/cart.model';
import { Customer } from './customer/model/customer.model';
import { Customer_Address } from './customer_address/model/customer_address.model';
import { Customer_Card } from './customer_card/model/customer_card.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { CountryModule } from './country/country.module';
import { Country } from './country/model/country.model';
import { CarModule } from './car/car.module';
import { CommentModule } from './comment/comment.module';
import { OrderModule } from './order/order.module';
import { Car } from './car/car.model';
import { Comment } from './comment/comment.model';
import { Order } from './order/order.model';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'images'),
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Country,
        Cart,
        Customer,
        Customer_Address,
        Customer_Card,
        Country,
        Car,
        Comment,
        Order,
      ],
      autoLoadModels: true,
      logging: false,
    }),

    CartModule,
    CustomerCardModule,
    CustomerModule,
    CustomerAddressModule,
    AdminModule,
    CountryModule,
    CarModule,
    CommentModule,
    OrderModule,
    CountryModule,
  ],
})
export class AppModule {}
