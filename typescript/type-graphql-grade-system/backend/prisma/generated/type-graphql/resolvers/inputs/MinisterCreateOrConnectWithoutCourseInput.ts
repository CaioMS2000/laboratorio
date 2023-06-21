import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateWithoutCourseInput } from "../inputs/MinisterCreateWithoutCourseInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterCreateOrConnectWithoutCourseInput", {
  isAbstract: true
})
export class MinisterCreateOrConnectWithoutCourseInput {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterCreateWithoutCourseInput, {
    nullable: false
  })
  create!: MinisterCreateWithoutCourseInput;
}
