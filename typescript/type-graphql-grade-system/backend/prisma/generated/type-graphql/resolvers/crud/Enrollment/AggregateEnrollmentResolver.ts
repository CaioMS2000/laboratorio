import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEnrollmentArgs } from "./args/AggregateEnrollmentArgs";
import { Enrollment } from "../../../models/Enrollment";
import { AggregateEnrollment } from "../../outputs/AggregateEnrollment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class AggregateEnrollmentResolver {
  @TypeGraphQL.Query(_returns => AggregateEnrollment, {
    nullable: false
  })
  async aggregateEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEnrollmentArgs): Promise<AggregateEnrollment> {
    return getPrismaFromContext(ctx).enrollment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
