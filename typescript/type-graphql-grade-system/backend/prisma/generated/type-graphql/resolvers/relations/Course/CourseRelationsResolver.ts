import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Course } from "../../../models/Course";
import { Enrollment } from "../../../models/Enrollment";
import { Minister } from "../../../models/Minister";
import { CourseEnrollmentsArgs } from "./args/CourseEnrollmentsArgs";
import { CourseMinisterArgs } from "./args/CourseMinisterArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Course)
export class CourseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Enrollment], {
    nullable: false
  })
  async enrollments(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CourseEnrollmentsArgs): Promise<Enrollment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).course.findUniqueOrThrow({
      where: {
        id: course.id,
      },
    }).enrollments({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Minister], {
    nullable: false
  })
  async minister(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CourseMinisterArgs): Promise<Minister[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).course.findUniqueOrThrow({
      where: {
        id: course.id,
      },
    }).minister({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
