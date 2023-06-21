import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateWithoutCourseInput } from "../inputs/MinisterCreateWithoutCourseInput";
import { MinisterUpdateWithoutCourseInput } from "../inputs/MinisterUpdateWithoutCourseInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterUpsertWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class MinisterUpsertWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterUpdateWithoutCourseInput, {
    nullable: false
  })
  update!: MinisterUpdateWithoutCourseInput;

  @TypeGraphQL.Field(_type => MinisterCreateWithoutCourseInput, {
    nullable: false
  })
  create!: MinisterCreateWithoutCourseInput;
}
