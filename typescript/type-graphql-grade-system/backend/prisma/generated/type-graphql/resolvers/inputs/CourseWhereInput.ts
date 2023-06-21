import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentListRelationFilter } from "../inputs/EnrollmentListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MinisterListRelationFilter } from "../inputs/MinisterListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CourseWhereInput", {
  isAbstract: true
})
export class CourseWhereInput {
  @TypeGraphQL.Field(_type => [CourseWhereInput], {
    nullable: true
  })
  AND?: CourseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereInput], {
    nullable: true
  })
  OR?: CourseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereInput], {
    nullable: true
  })
  NOT?: CourseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnrollmentListRelationFilter, {
    nullable: true
  })
  enrollments?: EnrollmentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MinisterListRelationFilter, {
    nullable: true
  })
  minister?: MinisterListRelationFilter | undefined;
}
