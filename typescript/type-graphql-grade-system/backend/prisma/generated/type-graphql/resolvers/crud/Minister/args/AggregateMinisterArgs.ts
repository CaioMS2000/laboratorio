import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterOrderByWithRelationInput } from "../../../inputs/MinisterOrderByWithRelationInput";
import { MinisterWhereInput } from "../../../inputs/MinisterWhereInput";
import { MinisterWhereUniqueInput } from "../../../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  where?: MinisterWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MinisterOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MinisterOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: true
  })
  cursor?: MinisterWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
