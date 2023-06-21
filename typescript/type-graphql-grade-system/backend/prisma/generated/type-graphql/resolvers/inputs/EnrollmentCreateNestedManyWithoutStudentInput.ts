import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateManyStudentInputEnvelope } from "../inputs/EnrollmentCreateManyStudentInputEnvelope";
import { EnrollmentCreateOrConnectWithoutStudentInput } from "../inputs/EnrollmentCreateOrConnectWithoutStudentInput";
import { EnrollmentCreateWithoutStudentInput } from "../inputs/EnrollmentCreateWithoutStudentInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentCreateNestedManyWithoutStudentInput", {
  isAbstract: true
})
export class EnrollmentCreateNestedManyWithoutStudentInput {
  @TypeGraphQL.Field(_type => [EnrollmentCreateWithoutStudentInput], {
    nullable: true
  })
  create?: EnrollmentCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => EnrollmentCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: EnrollmentCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentWhereUniqueInput], {
    nullable: true
  })
  connect?: EnrollmentWhereUniqueInput[] | undefined;
}
