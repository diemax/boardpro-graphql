import { Field, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class Hello {
  @Field({ nullable: true })
  hello?: string;
}