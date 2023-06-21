import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutEnrollmentsInput } from "../inputs/CourseCreateWithoutEnrollmentsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutEnrollmentsInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutEnrollmentsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutEnrollmentsInput;
}
