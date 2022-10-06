import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Int)
  id: number;

  @Field()
  original_title: string;

  @Field()
  release_date: string;

  @Field()
  poster_path?: string;

  @Field()
  popularity: number;
}
