import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterUpdateInput } from "../../../inputs/MinisterUpdateInput";
import { MinisterWhereUniqueInput } from "../../../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterUpdateInput, {
    nullable: false
  })
  data!: MinisterUpdateInput;

  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;
}
