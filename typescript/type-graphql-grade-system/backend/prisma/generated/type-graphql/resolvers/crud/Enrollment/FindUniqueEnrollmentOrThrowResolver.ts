import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEnrollmentOrThrowArgs } from "./args/FindUniqueEnrollmentOrThrowArgs";
import { Enrollment } from "../../../models/Enrollment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class FindUniqueEnrollmentOrThrowResolver {
  @TypeGraphQL.Query(_returns => Enrollment, {
    nullable: true
  })
  async getEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEnrollmentOrThrowArgs): Promise<Enrollment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
