import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  login: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
