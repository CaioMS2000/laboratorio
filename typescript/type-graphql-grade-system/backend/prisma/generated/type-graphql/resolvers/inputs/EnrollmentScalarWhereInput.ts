import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("EnrollmentScalarWhereInput", {
  isAbstract: true
})
export class EnrollmentScalarWhereInput {
  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereInput], {
    nullable: true
  })
  AND?: EnrollmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereInput], {
    nullable: true
  })
  OR?: EnrollmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereInput], {
    nullable: true
  })
  NOT?: EnrollmentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  studentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  courseId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  grade?: FloatNullableFilter | undefined;
}
