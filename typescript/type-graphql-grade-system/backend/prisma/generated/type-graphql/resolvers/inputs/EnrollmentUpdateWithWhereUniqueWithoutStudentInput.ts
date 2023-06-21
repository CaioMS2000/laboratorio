import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentUpdateWithoutStudentInput } from "../inputs/EnrollmentUpdateWithoutStudentInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentUpdateWithWhereUniqueWithoutStudentInput", {
  isAbstract: true
})
export class EnrollmentUpdateWithWhereUniqueWithoutStudentInput {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnrollmentUpdateWithoutStudentInput, {
    nullable: false
  })
  data!: EnrollmentUpdateWithoutStudentInput;
}
