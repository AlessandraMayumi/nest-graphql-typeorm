import { Module } from '@nestjs/common';
import { PhotoResolver } from './photo.resolver';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotoResolver, PhotoService],
})
export class PhotoModule {}
