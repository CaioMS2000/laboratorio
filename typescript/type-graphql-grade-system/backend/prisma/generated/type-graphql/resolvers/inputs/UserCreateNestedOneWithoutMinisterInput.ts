import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMinisterInput } from "../inputs/UserCreateOrConnectWithoutMinisterInput";
import { UserCreateWithoutMinisterInput } from "../inputs/UserCreateWithoutMinisterInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutMinisterInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutMinisterInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMinisterInput, {
    nullable: true
  })
  create?: UserCreateWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMinisterInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
