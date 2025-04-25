import { Field, Float, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UpdateStatusDto {
  @Field()
  success: boolean;

  @Field(() => String, { nullable: true })
  error?: string;
}

@ObjectType()
class CreatedBy {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
class CreatedByDto {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class PaginationDto {
  @Field(() => String, { nullable: true })
  cursorId?: string;

  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => Number, { nullable: true })
  skip?: number;
}

@InputType()
class FileInfoDto {
  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  fileName?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Number, { nullable: true })
  size?: number;

  @Field(() => String, { nullable: true })
  bucketName?: string;

  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => String, { nullable: true })
  uid?: string;

  @Field(() => String, { nullable: true })
  caption?: string;
}
export { UpdateStatusDto, CreatedByDto, CreatedBy, FileInfoDto };
