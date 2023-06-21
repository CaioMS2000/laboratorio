import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateNestedManyWithoutStudentInput } from "../inputs/EnrollmentCreateNestedManyWithoutStudentInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutMinisterInput", {
  isAbstract: true
})
export class UserCreateWithoutMinisterInput {
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

  @TypeGraphQL.Field(_type => EnrollmentCreateNestedManyWithoutStudentInput, {
    nullable: true
  })
  enrollments?: EnrollmentCreateNestedManyWithoutStudentInput | undefined;
}
