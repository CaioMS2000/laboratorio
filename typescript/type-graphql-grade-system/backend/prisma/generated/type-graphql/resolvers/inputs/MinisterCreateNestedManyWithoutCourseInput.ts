import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateManyCourseInputEnvelope } from "../inputs/MinisterCreateManyCourseInputEnvelope";
import { MinisterCreateOrConnectWithoutCourseInput } from "../inputs/MinisterCreateOrConnectWithoutCourseInput";
import { MinisterCreateWithoutCourseInput } from "../inputs/MinisterCreateWithoutCourseInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterCreateNestedManyWithoutCourseInput", {
  isAbstract: true
})
export class MinisterCreateNestedManyWithoutCourseInput {
  @TypeGraphQL.Field(_type => [MinisterCreateWithoutCourseInput], {
    nullable: true
  })
  create?: MinisterCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: MinisterCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => MinisterCreateManyCourseInputEnvelope, {
    nullable: true
  })
  createMany?: MinisterCreateManyCourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereUniqueInput], {
    nullable: true
  })
  connect?: MinisterWhereUniqueInput[] | undefined;
}
