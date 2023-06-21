import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentUpdateManyWithoutCourseNestedInput } from "../inputs/EnrollmentUpdateManyWithoutCourseNestedInput";
import { MinisterUpdateManyWithoutCourseNestedInput } from "../inputs/MinisterUpdateManyWithoutCourseNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseUpdateInput", {
  isAbstract: true
})
export class CourseUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput | undefined;

  @TypeGraphQL.Field(_type => MinisterUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  minister?: MinisterUpdateManyWithoutCourseNestedInput | undefined;
}
