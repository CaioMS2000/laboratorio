import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutMinisterNestedInput } from "../inputs/CourseUpdateOneRequiredWithoutMinisterNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MinisterUpdateWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterUpdateWithoutTeacherInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutMinisterNestedInput, {
    nullable: true
  })
  course?: CourseUpdateOneRequiredWithoutMinisterNestedInput | undefined;
}
