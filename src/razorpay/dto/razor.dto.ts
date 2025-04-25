import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class RazorPayDto {
  @Field(() => Number, { nullable: true })
  amount: number;
}
