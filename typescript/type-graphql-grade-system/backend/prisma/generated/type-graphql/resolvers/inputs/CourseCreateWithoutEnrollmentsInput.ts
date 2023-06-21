import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateNestedManyWithoutCourseInput } from "../inputs/MinisterCreateNestedManyWithoutCourseInput";

@TypeGraphQL.InputType("CourseCreateWithoutEnrollmentsInput", {
  isAbstract: true
})
export class CourseCreateWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MinisterCreateNestedManyWithoutCourseInput, {
    nullable: true
  })
  minister?: MinisterCreateNestedManyWithoutCourseInput | undefined;
}
