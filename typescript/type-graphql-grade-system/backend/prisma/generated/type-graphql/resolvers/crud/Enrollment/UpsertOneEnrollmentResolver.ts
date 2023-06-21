import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEnrollmentArgs } from "./args/UpsertOneEnrollmentArgs";
import { Enrollment } from "../../../models/Enrollment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class UpsertOneEnrollmentResolver {
  @TypeGraphQL.Mutation(_returns => Enrollment, {
    nullable: false
  })
  async upsertOneEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEnrollmentArgs): Promise<Enrollment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
