import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutEnrollmentsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEnrollmentsNestedInput";

@TypeGraphQL.InputType("EnrollmentUpdateWithoutCourseInput", {
  isAbstract: true
})
export class EnrollmentUpdateWithoutCourseInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  grade?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEnrollmentsNestedInput, {
    nullable: true
  })
  student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput | undefined;
}
