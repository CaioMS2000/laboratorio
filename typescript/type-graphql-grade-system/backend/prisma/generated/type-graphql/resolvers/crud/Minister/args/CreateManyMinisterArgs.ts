import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MinisterCreateManyInput } from "../../../inputs/MinisterCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMinisterArgs {
  @TypeGraphQL.Field(_type => [MinisterCreateManyInput], {
    nullable: false
  })
  data!: MinisterCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
