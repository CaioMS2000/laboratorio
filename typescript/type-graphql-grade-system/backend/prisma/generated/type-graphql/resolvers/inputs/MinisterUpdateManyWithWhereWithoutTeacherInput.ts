import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterScalarWhereInput } from "../inputs/MinisterScalarWhereInput";
import { MinisterUpdateManyMutationInput } from "../inputs/MinisterUpdateManyMutationInput";

@TypeGraphQL.InputType("MinisterUpdateManyWithWhereWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterUpdateManyWithWhereWithoutTeacherInput {
  @TypeGraphQL.Field(_type => MinisterScalarWhereInput, {
    nullable: false
  })
  where!: MinisterScalarWhereInput;

  @TypeGraphQL.Field(_type => MinisterUpdateManyMutationInput, {
    nullable: false
  })
  data!: MinisterUpdateManyMutationInput;
}
