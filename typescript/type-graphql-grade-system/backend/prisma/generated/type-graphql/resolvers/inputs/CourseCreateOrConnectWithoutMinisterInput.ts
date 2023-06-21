import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutMinisterInput } from "../inputs/CourseCreateWithoutMinisterInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutMinisterInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutMinisterInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutMinisterInput, {
    nullable: false
  })
  create!: CourseCreateWithoutMinisterInput;
}
