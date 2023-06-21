import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Enrollment } from "../models/Enrollment";
import { Minister } from "../models/Minister";
import { CourseCount } from "../resolvers/outputs/CourseCount";

@TypeGraphQL.ObjectType("Course", {
  isAbstract: true
})
export class Course {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  enrollments?: Enrollment[];

  minister?: Minister[];

  @TypeGraphQL.Field(_type => CourseCount, {
    nullable: true
  })
  _count?: CourseCount | null;
}
