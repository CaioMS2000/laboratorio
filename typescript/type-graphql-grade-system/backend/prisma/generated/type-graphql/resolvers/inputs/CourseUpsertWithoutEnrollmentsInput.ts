import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutEnrollmentsInput } from "../inputs/CourseCreateWithoutEnrollmentsInput";
import { CourseUpdateWithoutEnrollmentsInput } from "../inputs/CourseUpdateWithoutEnrollmentsInput";

@TypeGraphQL.InputType("CourseUpsertWithoutEnrollmentsInput", {
  isAbstract: true
})
export class CourseUpsertWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => CourseUpdateWithoutEnrollmentsInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutEnrollmentsInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutEnrollmentsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutEnrollmentsInput;
}
