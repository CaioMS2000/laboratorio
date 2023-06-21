import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutEnrollmentsInput } from "../inputs/CourseCreateOrConnectWithoutEnrollmentsInput";
import { CourseCreateWithoutEnrollmentsInput } from "../inputs/CourseCreateWithoutEnrollmentsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutEnrollmentsInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutEnrollmentsInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutEnrollmentsInput, {
    nullable: true
  })
  create?: CourseCreateWithoutEnrollmentsInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutEnrollmentsInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
