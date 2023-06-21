import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEnrollmentOrThrowArgs } from "./args/FindFirstEnrollmentOrThrowArgs";
import { Enrollment } from "../../../models/Enrollment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class FindFirstEnrollmentOrThrowResolver {
  @TypeGraphQL.Query(_returns => Enrollment, {
    nullable: true
  })
  async findFirstEnrollmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEnrollmentOrThrowArgs): Promise<Enrollment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
