import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentUpdateWithoutCourseInput } from "../inputs/EnrollmentUpdateWithoutCourseInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentUpdateWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class EnrollmentUpdateWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnrollmentUpdateWithoutCourseInput, {
    nullable: false
  })
  data!: EnrollmentUpdateWithoutCourseInput;
}
