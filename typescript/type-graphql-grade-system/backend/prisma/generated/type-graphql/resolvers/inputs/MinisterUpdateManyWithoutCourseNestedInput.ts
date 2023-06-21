import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateManyCourseInputEnvelope } from "../inputs/MinisterCreateManyCourseInputEnvelope";
import { MinisterCreateOrConnectWithoutCourseInput } from "../inputs/MinisterCreateOrConnectWithoutCourseInput";
import { MinisterCreateWithoutCourseInput } from "../inputs/MinisterCreateWithoutCourseInput";
import { MinisterScalarWhereInput } from "../inputs/MinisterScalarWhereInput";
import { MinisterUpdateManyWithWhereWithoutCourseInput } from "../inputs/MinisterUpdateManyWithWhereWithoutCourseInput";
import { MinisterUpdateWithWhereUniqueWithoutCourseInput } from "../inputs/MinisterUpdateWithWhereUniqueWithoutCourseInput";
import { MinisterUpsertWithWhereUniqueWithoutCourseInput } from "../inputs/MinisterUpsertWithWhereUniqueWithoutCourseInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterUpdateManyWithoutCourseNestedInput", {
  isAbstract: true
})
export class MinisterUpdateManyWithoutCourseNestedInput {
  @TypeGraphQL.Field(_type => [MinisterCreateWithoutCourseInput], {
    nullable: true
  })
  create?: MinisterCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: MinisterCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterUpsertWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  upsert?: MinisterUpsertWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => MinisterCreateManyCourseInputEnvelope, {
    nullable: true
  })
  createMany?: MinisterCreateManyCourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereUniqueInput], {
    nullable: true
  })
  set?: MinisterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MinisterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereUniqueInput], {
    nullable: true
  })
  delete?: MinisterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereUniqueInput], {
    nullable: true
  })
  connect?: MinisterWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterUpdateWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  update?: MinisterUpdateWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterUpdateManyWithWhereWithoutCourseInput], {
    nullable: true
  })
  updateMany?: MinisterUpdateManyWithWhereWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MinisterScalarWhereInput[] | undefined;
}
