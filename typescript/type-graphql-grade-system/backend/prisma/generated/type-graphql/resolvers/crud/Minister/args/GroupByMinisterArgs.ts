import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterOrderByWithAggregationInput } from "../../../inputs/MinisterOrderByWithAggregationInput";
import { MinisterScalarWhereWithAggregatesInput } from "../../../inputs/MinisterScalarWhereWithAggregatesInput";
import { MinisterWhereInput } from "../../../inputs/MinisterWhereInput";
import { MinisterScalarFieldEnum } from "../../../../enums/MinisterScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  where?: MinisterWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MinisterOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MinisterOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "teacherId" | "courseId">;

  @TypeGraphQL.Field(_type => MinisterScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MinisterScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
