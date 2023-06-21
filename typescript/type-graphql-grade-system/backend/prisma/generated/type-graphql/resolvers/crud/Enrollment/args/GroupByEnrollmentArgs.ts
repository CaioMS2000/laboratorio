import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentOrderByWithAggregationInput } from "../../../inputs/EnrollmentOrderByWithAggregationInput";
import { EnrollmentScalarWhereWithAggregatesInput } from "../../../inputs/EnrollmentScalarWhereWithAggregatesInput";
import { EnrollmentWhereInput } from "../../../inputs/EnrollmentWhereInput";
import { EnrollmentScalarFieldEnum } from "../../../../enums/EnrollmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  where?: EnrollmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EnrollmentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "studentId" | "courseId" | "grade">;

  @TypeGraphQL.Field(_type => EnrollmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EnrollmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
