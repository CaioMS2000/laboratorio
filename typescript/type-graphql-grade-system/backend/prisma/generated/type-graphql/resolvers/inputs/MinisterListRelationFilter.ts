import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterWhereInput } from "../inputs/MinisterWhereInput";

@TypeGraphQL.InputType("MinisterListRelationFilter", {
  isAbstract: true
})
export class MinisterListRelationFilter {
  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  every?: MinisterWhereInput | undefined;

  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  some?: MinisterWhereInput | undefined;

  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  none?: MinisterWhereInput | undefined;
}
