import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { RegisterInput } from '../../auth/dto/register-input';

@InputType()
export class UpdateUserInput extends PartialType(RegisterInput) {
  @Field(() => Int)
  id: number;
}
