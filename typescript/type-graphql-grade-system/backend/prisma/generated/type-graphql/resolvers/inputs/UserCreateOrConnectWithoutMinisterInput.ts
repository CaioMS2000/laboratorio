import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMinisterInput } from "../inputs/UserCreateWithoutMinisterInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutMinisterInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutMinisterInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMinisterInput, {
    nullable: false
  })
  create!: UserCreateWithoutMinisterInput;
}
