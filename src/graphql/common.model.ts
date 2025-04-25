import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class FileInfo {
  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  fileName?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Number, { nullable: true })
  size?: number;

  @Field(() => String)
  bucketName?: string;

  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => String, { nullable: true })
  uid?: string;

  @Field(() => String, { nullable: true })
  caption?: string;
}
export { FileInfo };
