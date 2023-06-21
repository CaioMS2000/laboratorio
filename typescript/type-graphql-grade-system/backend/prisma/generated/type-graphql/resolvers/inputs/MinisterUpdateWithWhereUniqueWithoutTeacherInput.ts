import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterUpdateWithoutTeacherInput } from "../inputs/MinisterUpdateWithoutTeacherInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterUpdateWithWhereUniqueWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterUpdateWithWhereUniqueWithoutTeacherInput {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterUpdateWithoutTeacherInput, {
    nullable: false
  })
  data!: MinisterUpdateWithoutTeacherInput;
}
