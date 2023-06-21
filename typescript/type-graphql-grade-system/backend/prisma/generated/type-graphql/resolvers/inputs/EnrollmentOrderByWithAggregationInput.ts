import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentAvgOrderByAggregateInput } from "../inputs/EnrollmentAvgOrderByAggregateInput";
import { EnrollmentCountOrderByAggregateInput } from "../inputs/EnrollmentCountOrderByAggregateInput";
import { EnrollmentMaxOrderByAggregateInput } from "../inputs/EnrollmentMaxOrderByAggregateInput";
import { EnrollmentMinOrderByAggregateInput } from "../inputs/EnrollmentMinOrderByAggregateInput";
import { EnrollmentSumOrderByAggregateInput } from "../inputs/EnrollmentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EnrollmentOrderByWithAggregationInput", {
  isAbstract: true
})
export class EnrollmentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  courseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  grade?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EnrollmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EnrollmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EnrollmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EnrollmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EnrollmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EnrollmentSumOrderByAggregateInput | undefined;
}
