import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutEnrollmentsNestedInput } from "../inputs/CourseUpdateOneRequiredWithoutEnrollmentsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EnrollmentUpdateWithoutStudentInput", {
  isAbstract: true
})
export class EnrollmentUpdateWithoutStudentInput {
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

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutEnrollmentsNestedInput, {
    nullable: true
  })
  course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput | undefined;
}
