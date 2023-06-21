import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateNestedManyWithoutCourseInput } from "../inputs/EnrollmentCreateNestedManyWithoutCourseInput";
import { MinisterCreateNestedManyWithoutCourseInput } from "../inputs/MinisterCreateNestedManyWithoutCourseInput";

@TypeGraphQL.InputType("CourseCreateInput", {
  isAbstract: true
})
export class CourseCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => EnrollmentCreateNestedManyWithoutCourseInput, {
    nullable: true
  })
  enrollments?: EnrollmentCreateNestedManyWithoutCourseInput | undefined;

  @TypeGraphQL.Field(_type => MinisterCreateNestedManyWithoutCourseInput, {
    nullable: true
  })
  minister?: MinisterCreateNestedManyWithoutCourseInput | undefined;
}
