import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterAvgOrderByAggregateInput } from "../inputs/MinisterAvgOrderByAggregateInput";
import { MinisterCountOrderByAggregateInput } from "../inputs/MinisterCountOrderByAggregateInput";
import { MinisterMaxOrderByAggregateInput } from "../inputs/MinisterMaxOrderByAggregateInput";
import { MinisterMinOrderByAggregateInput } from "../inputs/MinisterMinOrderByAggregateInput";
import { MinisterSumOrderByAggregateInput } from "../inputs/MinisterSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MinisterOrderByWithAggregationInput", {
  isAbstract: true
})
export class MinisterOrderByWithAggregationInput {
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
  teacherId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  courseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MinisterCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MinisterCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MinisterAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MinisterAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MinisterMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MinisterMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MinisterMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MinisterMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MinisterSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MinisterSumOrderByAggregateInput | undefined;
}
