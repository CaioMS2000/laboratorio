import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateWithoutTeacherInput } from "../inputs/MinisterCreateWithoutTeacherInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterCreateOrConnectWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterCreateOrConnectWithoutTeacherInput {
  @TypeGraphQL.Field(_type => MinisterWhereUniqueInput, {
    nullable: false
  })
  where!: MinisterWhereUniqueInput;

  @TypeGraphQL.Field(_type => MinisterCreateWithoutTeacherInput, {
    nullable: false
  })
  create!: MinisterCreateWithoutTeacherInput;
}
