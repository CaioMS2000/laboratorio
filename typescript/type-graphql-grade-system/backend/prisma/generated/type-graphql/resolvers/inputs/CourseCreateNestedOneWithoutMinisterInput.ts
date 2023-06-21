import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutMinisterInput } from "../inputs/CourseCreateOrConnectWithoutMinisterInput";
import { CourseCreateWithoutMinisterInput } from "../inputs/CourseCreateWithoutMinisterInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutMinisterInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutMinisterInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutMinisterInput, {
    nullable: true
  })
  create?: CourseCreateWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutMinisterInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
