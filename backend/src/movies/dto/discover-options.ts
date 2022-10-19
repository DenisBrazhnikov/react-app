import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DiscoverOptions {
  @Field()
  year: string;

  @Field()
  genre_id: string;

  @Field()
  lang_code: string;
}
