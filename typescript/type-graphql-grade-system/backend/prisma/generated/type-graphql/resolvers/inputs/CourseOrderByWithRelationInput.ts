import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentOrderByRelationAggregateInput } from "../inputs/EnrollmentOrderByRelationAggregateInput";
import { MinisterOrderByRelationAggregateInput } from "../inputs/MinisterOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOrderByWithRelationInput", {
  isAbstract: true
})
export class CourseOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EnrollmentOrderByRelationAggregateInput, {
    nullable: true
  })
  enrollments?: EnrollmentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MinisterOrderByRelationAggregateInput, {
    nullable: true
  })
  minister?: MinisterOrderByRelationAggregateInput | undefined;
}
