import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentUpdateManyWithoutStudentNestedInput } from "../inputs/EnrollmentUpdateManyWithoutStudentNestedInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { MinisterUpdateManyWithoutTeacherNestedInput } from "../inputs/MinisterUpdateManyWithoutTeacherNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  userId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentUpdateManyWithoutStudentNestedInput, {
    nullable: true
  })
  enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput | undefined;

  @TypeGraphQL.Field(_type => MinisterUpdateManyWithoutTeacherNestedInput, {
    nullable: true
  })
  minister?: MinisterUpdateManyWithoutTeacherNestedInput | undefined;
}
