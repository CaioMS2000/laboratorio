import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutMinisterInput } from "../inputs/UserCreateNestedOneWithoutMinisterInput";

@TypeGraphQL.InputType("MinisterCreateWithoutCourseInput", {
  isAbstract: true
})
export class MinisterCreateWithoutCourseInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMinisterInput, {
    nullable: false
  })
  teacher!: UserCreateNestedOneWithoutMinisterInput;
}
