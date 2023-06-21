import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Course } from "../../../models/Course";
import { Enrollment } from "../../../models/Enrollment";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class EnrollmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async student(@TypeGraphQL.Root() enrollment: Enrollment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findUniqueOrThrow({
      where: {
        id: enrollment.id,
      },
    }).student({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: false
  })
  async course(@TypeGraphQL.Root() enrollment: Enrollment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Course> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findUniqueOrThrow({
      where: {
        id: enrollment.id,
      },
    }).course({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
