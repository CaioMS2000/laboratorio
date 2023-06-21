import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("MinisterWhereInput", {
  isAbstract: true
})
export class MinisterWhereInput {
  @TypeGraphQL.Field(_type => [MinisterWhereInput], {
    nullable: true
  })
  AND?: MinisterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereInput], {
    nullable: true
  })
  OR?: MinisterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MinisterWhereInput], {
    nullable: true
  })
  NOT?: MinisterWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  teacher?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  course?: CourseRelationFilter | undefined;
}
