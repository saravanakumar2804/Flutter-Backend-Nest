import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FormDto {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => [String], { nullable: true })
  interests?: string[];

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  birthDate?: string;

  @Field(() => Number, { nullable: true })
  age?: number;

}
