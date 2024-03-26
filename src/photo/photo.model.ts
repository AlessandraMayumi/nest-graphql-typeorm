import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Photo {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  filename: string;

  @Field(() => Int)
  views: number;

  @Field(() => Boolean)
  isPublished: boolean;

  // @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {
  //   cascade: true,
  // })
  // metadata: PhotoMetadata;

  // // @ManyToOne(() => Author, (author) => author.photos)
  // // author: Author

  // @ManyToMany(() => Album, (album) => album.photos)
  // albums: Album[];
}
