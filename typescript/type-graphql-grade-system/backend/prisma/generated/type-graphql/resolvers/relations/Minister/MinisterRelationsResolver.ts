import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Course } from "../../../models/Course";
import { Minister } from "../../../models/Minister";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Minister)
export class MinisterRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async teacher(@TypeGraphQL.Root() minister: Minister, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).minister.findUniqueOrThrow({
      where: {
        id: minister.id,
      },
    }).teacher({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Course, {
    nullable: false
  })
  async course(@TypeGraphQL.Root() minister: Minister, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Course> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).minister.findUniqueOrThrow({
      where: {
        id: minister.id,
      },
    }).course({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
