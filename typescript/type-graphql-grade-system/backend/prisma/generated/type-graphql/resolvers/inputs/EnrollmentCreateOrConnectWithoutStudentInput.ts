import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateWithoutStudentInput } from "../inputs/EnrollmentCreateWithoutStudentInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentCreateOrConnectWithoutStudentInput", {
  isAbstract: true
})
export class EnrollmentCreateOrConnectWithoutStudentInput {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnrollmentCreateWithoutStudentInput, {
    nullable: false
  })
  create!: EnrollmentCreateWithoutStudentInput;
}
