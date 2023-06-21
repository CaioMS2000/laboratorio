import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterUpdateWithoutCourseInput } from "../inputs/MinisterUpdateWithoutCourseInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterUpdateWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class MinisterUpdateWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterUpdateWithoutCourseInput, {
    nullable: false
  })
  data!: MinisterUpdateWithoutCourseInput;
}
