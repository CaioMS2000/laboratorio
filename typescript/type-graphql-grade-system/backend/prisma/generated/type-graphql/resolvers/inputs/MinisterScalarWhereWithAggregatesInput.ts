import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MinisterScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MinisterScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MinisterScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MinisterScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MinisterScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MinisterScalarWhereWithAggregatesInput[] | undefined;

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
  teacherId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  courseId?: IntWithAggregatesFilter | undefined;
}
