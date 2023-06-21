import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateNestedManyWithoutCourseInput } from "../inputs/EnrollmentCreateNestedManyWithoutCourseInput";

@TypeGraphQL.InputType("CourseCreateWithoutMinisterInput", {
  isAbstract: true
})
export class CourseCreateWithoutMinisterInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => EnrollmentCreateNestedManyWithoutCourseInput, {
    nullable: true
  })
  enrollments?: EnrollmentCreateNestedManyWithoutCourseInput | undefined;
}
