import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutEnrollmentsInput } from "../inputs/CourseCreateNestedOneWithoutEnrollmentsInput";
import { UserCreateNestedOneWithoutEnrollmentsInput } from "../inputs/UserCreateNestedOneWithoutEnrollmentsInput";

@TypeGraphQL.InputType("EnrollmentCreateInput", {
  isAbstract: true
})
export class EnrollmentCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEnrollmentsInput, {
    nullable: false
  })
  student!: UserCreateNestedOneWithoutEnrollmentsInput;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutEnrollmentsInput, {
    nullable: false
  })
  course!: CourseCreateNestedOneWithoutEnrollmentsInput;
}
