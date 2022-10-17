import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field()
  iso_639_1: string;

  @Field()
  english_name: string;
}
