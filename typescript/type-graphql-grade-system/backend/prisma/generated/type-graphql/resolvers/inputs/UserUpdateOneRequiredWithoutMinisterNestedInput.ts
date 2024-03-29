import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMinisterInput } from "../inputs/UserCreateOrConnectWithoutMinisterInput";
import { UserCreateWithoutMinisterInput } from "../inputs/UserCreateWithoutMinisterInput";
import { UserUpdateWithoutMinisterInput } from "../inputs/UserUpdateWithoutMinisterInput";
import { UserUpsertWithoutMinisterInput } from "../inputs/UserUpsertWithoutMinisterInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMinisterNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMinisterNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMinisterInput, {
    nullable: true
  })
  create?: UserCreateWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMinisterInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMinisterInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMinisterInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMinisterInput | undefined;
}
