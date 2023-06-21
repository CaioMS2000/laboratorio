import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateWithoutCourseInput } from "../inputs/EnrollmentCreateWithoutCourseInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentCreateOrConnectWithoutCourseInput", {
  isAbstract: true
})
export class EnrollmentCreateOrConnectWithoutCourseInput {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnrollmentCreateWithoutCourseInput, {
    nullable: false
  })
  create!: EnrollmentCreateWithoutCourseInput;
}
