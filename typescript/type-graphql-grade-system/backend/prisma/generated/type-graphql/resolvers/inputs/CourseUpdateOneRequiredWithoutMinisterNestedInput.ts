import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutMinisterInput } from "../inputs/CourseCreateOrConnectWithoutMinisterInput";
import { CourseCreateWithoutMinisterInput } from "../inputs/CourseCreateWithoutMinisterInput";
import { CourseUpdateWithoutMinisterInput } from "../inputs/CourseUpdateWithoutMinisterInput";
import { CourseUpsertWithoutMinisterInput } from "../inputs/CourseUpsertWithoutMinisterInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateOneRequiredWithoutMinisterNestedInput", {
  isAbstract: true
})
export class CourseUpdateOneRequiredWithoutMinisterNestedInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutMinisterInput, {
    nullable: true
  })
  create?: CourseCreateWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutMinisterInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpsertWithoutMinisterInput, {
    nullable: true
  })
  upsert?: CourseUpsertWithoutMinisterInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutMinisterInput, {
    nullable: true
  })
  update?: CourseUpdateWithoutMinisterInput | undefined;
}
