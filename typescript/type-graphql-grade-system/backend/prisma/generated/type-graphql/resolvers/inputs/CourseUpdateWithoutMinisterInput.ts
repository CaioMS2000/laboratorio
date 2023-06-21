import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentUpdateManyWithoutCourseNestedInput } from "../inputs/EnrollmentUpdateManyWithoutCourseNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseUpdateWithoutMinisterInput", {
  isAbstract: true
})
export class CourseUpdateWithoutMinisterInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput | undefined;
}
