import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutMinisterInput } from "../inputs/CourseCreateNestedOneWithoutMinisterInput";

@TypeGraphQL.InputType("MinisterCreateWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterCreateWithoutTeacherInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutMinisterInput, {
    nullable: false
  })
  course!: CourseCreateNestedOneWithoutMinisterInput;
}
