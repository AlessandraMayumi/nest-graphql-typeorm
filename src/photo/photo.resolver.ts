import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';

@Resolver(() => Photo)
export class PhotoResolver {
  constructor(private photoService: PhotoService) {}

  @Query(() => Photo)
  async photo(@Args('id', { type: () => Int }) id: number) {
    return this.photoService.findOneById(id);
  }
}
