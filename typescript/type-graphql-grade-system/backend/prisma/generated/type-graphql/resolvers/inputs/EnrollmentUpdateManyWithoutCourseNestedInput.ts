import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateManyCourseInputEnvelope } from "../inputs/EnrollmentCreateManyCourseInputEnvelope";
import { EnrollmentCreateOrConnectWithoutCourseInput } from "../inputs/EnrollmentCreateOrConnectWithoutCourseInput";
import { EnrollmentCreateWithoutCourseInput } from "../inputs/EnrollmentCreateWithoutCourseInput";
import { EnrollmentScalarWhereInput } from "../inputs/EnrollmentScalarWhereInput";
import { EnrollmentUpdateManyWithWhereWithoutCourseInput } from "../inputs/EnrollmentUpdateManyWithWhereWithoutCourseInput";
import { EnrollmentUpdateWithWhereUniqueWithoutCourseInput } from "../inputs/EnrollmentUpdateWithWhereUniqueWithoutCourseInput";
import { EnrollmentUpsertWithWhereUniqueWithoutCourseInput } from "../inputs/EnrollmentUpsertWithWhereUniqueWithoutCourseInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentUpdateManyWithoutCourseNestedInput", {
  isAbstract: true
})
export class EnrollmentUpdateManyWithoutCourseNestedInput {
  @TypeGraphQL.Field(_type => [EnrollmentCreateWithoutCourseInput], {
    nullable: true
  })
  create?: EnrollmentCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentUpsertWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => EnrollmentCreateManyCourseInputEnvelope, {
    nullable: true
  })
  createMany?: EnrollmentCreateManyCourseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EnrollmentUpdateWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentUpdateManyWithWhereWithoutCourseInput], {
    nullable: true
  })
  updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EnrollmentScalarWhereInput[] | undefined;
}
