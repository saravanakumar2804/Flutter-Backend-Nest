import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Form {
  @Field(() => String, { nullable: true })
  id?: string;

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

  @Field(() => Date, { nullable: true })
  createdAt?: Date;
}
