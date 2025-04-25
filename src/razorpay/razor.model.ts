import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Razorpay {
  @Field()
  @Field(() => Number, { nullable: true })
  amount: number;

  @Field(() => String, { nullable: true })
  orderId: string;
}
