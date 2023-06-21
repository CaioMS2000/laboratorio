import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EnrollmentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EnrollmentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EnrollmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EnrollmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EnrollmentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  studentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  courseId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  grade?: FloatNullableWithAggregatesFilter | undefined;
}
