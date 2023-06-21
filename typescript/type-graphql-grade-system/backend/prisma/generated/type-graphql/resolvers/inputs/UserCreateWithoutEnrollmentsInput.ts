import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateNestedManyWithoutTeacherInput } from "../inputs/MinisterCreateNestedManyWithoutTeacherInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutEnrollmentsInput", {
  isAbstract: true
})
export class UserCreateWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | undefined;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "STUDENT" | "TEACHER" | undefined;

  @TypeGraphQL.Field(_type => MinisterCreateNestedManyWithoutTeacherInput, {
    nullable: true
  })
  minister?: MinisterCreateNestedManyWithoutTeacherInput | undefined;
}
