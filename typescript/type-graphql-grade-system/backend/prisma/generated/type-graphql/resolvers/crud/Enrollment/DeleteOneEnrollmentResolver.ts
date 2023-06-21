import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEnrollmentArgs } from "./args/DeleteOneEnrollmentArgs";
import { Enrollment } from "../../../models/Enrollment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Enrollment)
export class DeleteOneEnrollmentResolver {
  @TypeGraphQL.Mutation(_returns => Enrollment, {
    nullable: true
  })
  async deleteOneEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEnrollmentArgs): Promise<Enrollment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
