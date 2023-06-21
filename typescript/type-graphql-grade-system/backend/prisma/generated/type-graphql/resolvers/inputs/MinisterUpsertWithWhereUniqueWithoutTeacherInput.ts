import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateWithoutTeacherInput } from "../inputs/MinisterCreateWithoutTeacherInput";
import { MinisterUpdateWithoutTeacherInput } from "../inputs/MinisterUpdateWithoutTeacherInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterUpsertWithWhereUniqueWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterUpsertWithWhereUniqueWithoutTeacherInput {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterUpdateWithoutTeacherInput, {
    nullable: false
  })
  update!: MinisterUpdateWithoutTeacherInput;

  @TypeGraphQL.Field(_type => MinisterCreateWithoutTeacherInput, {
    nullable: false
  })
  create!: MinisterCreateWithoutTeacherInput;
}
