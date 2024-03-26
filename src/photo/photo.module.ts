import { Module } from '@nestjs/common';
import { PhotoResolver } from './photo.resolver';
import { PhotoService } from './photo.service';

@Module({
  imports: [],
  providers: [PhotoResolver, PhotoService],
})
export class PhotoModule {}
