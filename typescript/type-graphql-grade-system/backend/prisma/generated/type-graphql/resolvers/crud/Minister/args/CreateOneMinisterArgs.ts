import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterCreateInput } from "../../../inputs/MinisterCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterCreateInput, {
    nullable: false
  })
  data!: MinisterCreateInput;
}
