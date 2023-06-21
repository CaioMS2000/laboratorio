import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateManyTeacherInputEnvelope } from "../inputs/MinisterCreateManyTeacherInputEnvelope";
import { MinisterCreateOrConnectWithoutTeacherInput } from "../inputs/MinisterCreateOrConnectWithoutTeacherInput";
import { MinisterCreateWithoutTeacherInput } from "../inputs/MinisterCreateWithoutTeacherInput";
import { MinisterWhereUniqueInput } from "../inputs/MinisterWhereUniqueInput";

@TypeGraphQL.InputType("MinisterCreateNestedManyWithoutTeacherInput", {
  isAbstract: true
})
export class MinisterCreateNestedManyWithoutTeacherInput {
  @TypeGraphQL.Field(_type => [MinisterCreateWithoutTeacherInput], {
    nullable: true
  })
  create?: MinisterCreateWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterCreateOrConnectWithoutTeacherInput], {
    nullable: true
  })
  connectOrCreate?: MinisterCreateOrConnectWithoutTeacherInput[] | undefined;

  @TypeGraphQL.Field(_type => MinisterCreateManyTeacherInputEnvelope, {
    nullable: true
  })
  createMany?: MinisterCreateManyTeacherInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereUniqueInput], {
    nullable: true
  })
  connect?: MinisterWhereUniqueInput[] | undefined;
}
