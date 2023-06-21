import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateManyCourseInputEnvelope } from "../inputs/EnrollmentCreateManyCourseInputEnvelope";
import { EnrollmentCreateOrConnectWithoutCourseInput } from "../inputs/EnrollmentCreateOrConnectWithoutCourseInput";
import { EnrollmentCreateWithoutCourseInput } from "../inputs/EnrollmentCreateWithoutCourseInput";
import { EnrollmentWhereUniqueInput } from "../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.InputType("EnrollmentCreateNestedManyWithoutCourseInput", {
  isAbstract: true
})
export class EnrollmentCreateNestedManyWithoutCourseInput {
  @TypeGraphQL.Field(_type => [EnrollmentCreateWithoutCourseInput], {
    nullable: true
  })
  create?: EnrollmentCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => EnrollmentCreateManyCourseInputEnvelope, {
    nullable: true
  })
  createMany?: EnrollmentCreateManyCourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentWhereUniqueInput], {
    nullable: true
  })
  connect?: EnrollmentWhereUniqueInput[] | undefined;
}
