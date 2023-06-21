import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutEnrollmentsInput } from "../inputs/CourseCreateNestedOneWithoutEnrollmentsInput";

@TypeGraphQL.InputType("EnrollmentCreateWithoutStudentInput", {
  isAbstract: true
})
export class EnrollmentCreateWithoutStudentInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  grade?: number | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutEnrollmentsInput, {
    nullable: false
  })
  course!: CourseCreateNestedOneWithoutEnrollmentsInput;
}
