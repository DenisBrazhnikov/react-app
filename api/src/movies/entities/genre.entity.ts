import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Genre {
  @Field()
  id: number;

  @Field()
  name: string;
}
