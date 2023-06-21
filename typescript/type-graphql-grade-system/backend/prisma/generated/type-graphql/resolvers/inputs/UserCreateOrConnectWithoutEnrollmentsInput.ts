import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEnrollmentsInput } from "../inputs/UserCreateWithoutEnrollmentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutEnrollmentsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEnrollmentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutEnrollmentsInput;
}
