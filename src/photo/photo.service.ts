import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.model';
import { Photo as PhotoEntity } from './photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photosRepository: Repository<PhotoEntity>,
  ) {}

  findOneById = async (id: number): Promise<Photo> => {
    const teste = await this.photosRepository.find();
    console.log(teste);
    const photo = new Photo();
    photo.id = id;
    photo.name = 'string';
    photo.description = 'string';
    photo.filename = 'string';
    photo.views = 25;
    photo.isPublished = true;
    return photo;
  };
}
