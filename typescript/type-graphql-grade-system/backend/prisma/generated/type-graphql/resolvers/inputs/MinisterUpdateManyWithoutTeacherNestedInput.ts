import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateManyTeacherInputEnvelope } from "../inputs/MinisterCreateManyTeacherInputEnvelope";
import { MinisterCreateOrConnectWithoutTeacherInput } from "../inputs/MinisterCreateOrConnectWithoutTeacherInput";
import { MinisterCreateWithoutTeacherInput } from "../inputs/MinisterCreateWithoutTeacherInput";
import { MinisterScalarWhereInput } from "../inputs/MinisterScalarWhereInput";
import { MinisterUpdateManyWithWhereWithoutTeacherInput } from "../inputs/MinisterUpdateManyWithWhereWithoutTeacherInput";
import { MinisterUpdateWithWhereUniqueWithoutTeacherInput } from "../inputs/MinisterUpdateWithWhereUniqueWithoutTeacherInput";
import { MinisterUpsertWithWhereUniqueWithoutTeacherInput } from "../inputs/MinisterUpsertWithWhereUniqueWithoutTeacherInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterUpdateManyWithoutTeacherNestedInput", {
  isAbstract: true
})
export class MinisterUpdateManyWithoutTeacherNestedInput {
  @TypeGraphQL.Field(_type => [MinisterCreateWithoutTeacherInput], {
    nullable: true
  })
  create?: MinisterCreateWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterCreateOrConnectWithoutTeacherInput], {
    nullable: true
  })
  connectOrCreate?: MinisterCreateOrConnectWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterUpsertWithWhereUniqueWithoutTeacherInput], {
    nullable: true
  })
  upsert?: MinisterUpsertWithWhereUniqueWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => MinisterCreateManyTeacherInputEnvelope, {
    nullable: true
  })
  createMany?: MinisterCreateManyTeacherInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MinisterUpdateWithWhereUniqueWithoutTeacherInput], {
    nullable: true
  })
  update?: MinisterUpdateWithWhereUniqueWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterUpdateManyWithWhereWithoutTeacherInput], {
    nullable: true
  })
  updateMany?: MinisterUpdateManyWithWhereWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MinisterScalarWhereInput[] | undefined;
}
