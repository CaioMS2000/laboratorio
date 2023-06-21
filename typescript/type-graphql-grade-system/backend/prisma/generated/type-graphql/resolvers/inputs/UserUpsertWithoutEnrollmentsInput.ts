import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEnrollmentsInput } from "../inputs/UserCreateWithoutEnrollmentsInput";
import { UserUpdateWithoutEnrollmentsInput } from "../inputs/UserUpdateWithoutEnrollmentsInput";

@TypeGraphQL.InputType("UserUpsertWithoutEnrollmentsInput", {
  isAbstract: true
})
export class UserUpsertWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutEnrollmentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutEnrollmentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEnrollmentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutEnrollmentsInput;
}
