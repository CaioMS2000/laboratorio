import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterWhereInput } from "../../../inputs/MinisterWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  where?: MinisterWhereInput | undefined;
}
