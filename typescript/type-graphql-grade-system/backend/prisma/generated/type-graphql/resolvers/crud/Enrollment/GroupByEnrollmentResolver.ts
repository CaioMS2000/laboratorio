import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEnrollmentArgs } from "./args/GroupByEnrollmentArgs";
import { Enrollment } from "../../../models/Enrollment";
import { EnrollmentGroupBy } from "../../outputs/EnrollmentGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class GroupByEnrollmentResolver {
  @TypeGraphQL.Query(_returns => [EnrollmentGroupBy], {
    nullable: false
  })
  async groupByEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEnrollmentArgs): Promise<EnrollmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
