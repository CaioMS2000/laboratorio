import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MinisterScalarWhereInput", {
  isAbstract: true
})
export class MinisterScalarWhereInput {
  @TypeGraphQL.Field(_type => [MinisterScalarWhereInput], {
    nullable: true
  })
  AND?: MinisterScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarWhereInput], {
    nullable: true
  })
  OR?: MinisterScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterScalarWhereInput], {
    nullable: true
  })
  NOT?: MinisterScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  teacherId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  courseId?: IntFilter | undefined;
}
