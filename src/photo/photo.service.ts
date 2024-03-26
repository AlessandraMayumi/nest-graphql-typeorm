import { Injectable } from '@nestjs/common';
import { Photo } from './photo.model';

@Injectable()
export class PhotoService {
  constructor() {}

  findOneById = async (id: number): Promise<Photo> => {
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
