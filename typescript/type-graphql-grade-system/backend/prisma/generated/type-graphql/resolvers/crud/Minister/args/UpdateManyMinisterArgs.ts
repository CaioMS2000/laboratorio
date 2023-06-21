import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterUpdateManyMutationInput } from "../../../inputs/MinisterUpdateManyMutationInput";
import { MinisterWhereInput } from "../../../inputs/MinisterWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMinisterArgs {
  @TypeGraphQL.Field(_type => MinisterUpdateManyMutationInput, {
    nullable: false
  })
  data!: MinisterUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MinisterWhereInput, {
    nullable: true
  })
  where?: MinisterWhereInput | undefined;
}
