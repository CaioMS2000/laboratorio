import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentScalarWhereInput } from "../inputs/EnrollmentScalarWhereInput";
import { EnrollmentUpdateManyMutationInput } from "../inputs/EnrollmentUpdateManyMutationInput";

@TypeGraphQL.InputType("EnrollmentUpdateManyWithWhereWithoutStudentInput", {
  isAbstract: true
})
export class EnrollmentUpdateManyWithWhereWithoutStudentInput {
  @TypeGraphQL.Field(_type => EnrollmentScalarWhereInput, {
    nullable: false
  })
  where!: EnrollmentScalarWhereInput;

  @TypeGraphQL.Field(_type => EnrollmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: EnrollmentUpdateManyMutationInput;
}