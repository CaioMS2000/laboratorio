import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutMinisterInput } from "../inputs/CourseCreateWithoutMinisterInput";
import { CourseUpdateWithoutMinisterInput } from "../inputs/CourseUpdateWithoutMinisterInput";

@TypeGraphQL.InputType("CourseUpsertWithoutMinisterInput", {
  isAbstract: true
})
export class CourseUpsertWithoutMinisterInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutMinisterInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutMinisterInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutMinisterInput, {
    nullable: false
  })
  create!: CourseCreateWithoutMinisterInput;
}
