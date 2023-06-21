import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateManyStudentInputEnvelope } from "../inputs/EnrollmentCreateManyStudentInputEnvelope";
import { EnrollmentCreateOrConnectWithoutStudentInput } from "../inputs/EnrollmentCreateOrConnectWithoutStudentInput";
import { EnrollmentCreateWithoutStudentInput } from "../inputs/EnrollmentCreateWithoutStudentInput";
import { EnrollmentScalarWhereInput } from "../inputs/EnrollmentScalarWhereInput";
import { EnrollmentUpdateManyWithWhereWithoutStudentInput } from "../inputs/EnrollmentUpdateManyWithWhereWithoutStudentInput";
import { EnrollmentUpdateWithWhereUniqueWithoutStudentInput } from "../inputs/EnrollmentUpdateWithWhereUniqueWithoutStudentInput";
import { EnrollmentUpsertWithWhereUniqueWithoutStudentInput } from "../inputs/EnrollmentUpsertWithWhereUniqueWithoutStudentInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentUpdateManyWithoutStudentNestedInput", {
  isAbstract: true
})
export class EnrollmentUpdateManyWithoutStudentNestedInput {
  @TypeGraphQL.Field(_type => [EnrollmentCreateWithoutStudentInput], {
    nullable: true
  })
  create?: EnrollmentCreateWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentCreateOrConnectWithoutStudentInput], {
    nullable: true
  })
  connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentUpsertWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => EnrollmentCreateManyStudentInputEnvelope, {
    nullable: true
  })
  createMany?: EnrollmentCreateManyStudentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentWhereUniqueInput], {
    nullable: true
  })
  set?: EnrollmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EnrollmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentWhereUniqueInput], {
    nullable: true
  })
  delete?: EnrollmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentWhereUniqueInput], {
    nullable: true
  })
  connect?: EnrollmentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentUpdateWithWhereUniqueWithoutStudentInput], {
    nullable: true
  })
  update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentUpdateManyWithWhereWithoutStudentInput], {
    nullable: true
  })
  updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EnrollmentScalarWhereInput[] | undefined;
}
