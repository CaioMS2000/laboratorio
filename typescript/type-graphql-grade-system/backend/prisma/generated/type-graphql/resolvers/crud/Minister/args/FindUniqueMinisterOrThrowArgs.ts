import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterWhereUniqueInput } from "../../../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMinisterOrThrowArgs {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;
}
