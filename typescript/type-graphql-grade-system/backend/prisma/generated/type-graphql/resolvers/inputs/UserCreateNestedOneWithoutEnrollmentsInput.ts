import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutEnrollmentsInput } from "../inputs/UserCreateOrConnectWithoutEnrollmentsInput";
import { UserCreateWithoutEnrollmentsInput } from "../inputs/UserCreateWithoutEnrollmentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutEnrollmentsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEnrollmentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutEnrollmentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEnrollmentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
