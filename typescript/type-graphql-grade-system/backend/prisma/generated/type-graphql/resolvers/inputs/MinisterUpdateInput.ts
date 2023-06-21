import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneRequiredWithoutMinisterNestedInput } from "../inputs/CourseUpdateOneRequiredWithoutMinisterNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMinisterNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMinisterNestedInput";

@TypeGraphQL.InputType("MinisterUpdateInput", {
  isAbstract: true
})
export class MinisterUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMinisterNestedInput, {
    nullable: true
  })
  teacher?: UserUpdateOneRequiredWithoutMinisterNestedInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneRequiredWithoutMinisterNestedInput, {
    nullable: true
  })
  course?: CourseUpdateOneRequiredWithoutMinisterNestedInput | undefined;
}
