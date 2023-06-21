import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateWithoutCourseInput } from "../inputs/EnrollmentCreateWithoutCourseInput";
import { EnrollmentUpdateWithoutCourseInput } from "../inputs/EnrollmentUpdateWithoutCourseInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentUpsertWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class EnrollmentUpsertWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnrollmentUpdateWithoutCourseInput, {
    nullable: false
  })
  update!: EnrollmentUpdateWithoutCourseInput;

  @TypeGraphQL.Field(_type => EnrollmentCreateWithoutCourseInput, {
    nullable: false
  })
  create!: EnrollmentCreateWithoutCourseInput;
}
