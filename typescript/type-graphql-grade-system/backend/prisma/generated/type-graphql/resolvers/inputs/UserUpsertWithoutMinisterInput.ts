import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMinisterInput } from "../inputs/UserCreateWithoutMinisterInput";
import { UserUpdateWithoutMinisterInput } from "../inputs/UserUpdateWithoutMinisterInput";

@TypeGraphQL.InputType("UserUpsertWithoutMinisterInput", {
  isAbstract: true
})
export class UserUpsertWithoutMinisterInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMinisterInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMinisterInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMinisterInput, {
    nullable: false
  })
  create!: UserCreateWithoutMinisterInput;
}
