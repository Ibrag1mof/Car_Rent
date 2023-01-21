import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from 'src/car/car.model';
import { CarModule } from 'src/car/car.module';
import { CarService } from 'src/car/car.service';
import { FilesModule } from 'src/files/files.module';
import { CommentController } from './comment.controller';
import { Comment } from './comment.model';
import { CommentService } from './comment.service';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Car]), JwtModule],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
