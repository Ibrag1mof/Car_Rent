import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentModule } from 'src/comment/comment.module';
import { FilesModule } from 'src/files/files.module';
import { CarController } from './car.controller';
import { Car } from './car.model';
import { CarService } from './car.service';

@Module({
  imports: [SequelizeModule.forFeature([Car]), FilesModule],
  controllers: [CarController],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
