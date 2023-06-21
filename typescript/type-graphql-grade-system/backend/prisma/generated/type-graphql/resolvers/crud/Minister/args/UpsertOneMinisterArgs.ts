import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterCreateInput } from "../../../inputs/MinisterCreateInput";
import { MinisterUpdateInput } from "../../../inputs/MinisterUpdateInput";
import { MinisterWhereUniqueInput } from "../../../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterCreateInput, {
    nullable: false
  })
  create!: MinisterCreateInput;

  @TypeGraphQL.Field(_type => MinisterUpdateInput, {
    nullable: false
  })
  update!: MinisterUpdateInput;
}
