import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterUpdateManyWithoutCourseNestedInput } from "../inputs/MinisterUpdateManyWithoutCourseNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseUpdateWithoutEnrollmentsInput", {
  isAbstract: true
})
export class CourseUpdateWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MinisterUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  minister?: MinisterUpdateManyWithoutCourseNestedInput | undefined;
}
