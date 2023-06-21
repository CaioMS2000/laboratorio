import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMinisterOrThrowArgs } from "./args/FindFirstMinisterOrThrowArgs";
import { Minister } from "../../../models/Minister";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Minister)
export class FindFirstMinisterOrThrowResolver {
  @TypeGraphQL.Query(_returns => Minister, {
    nullable: true
  })
  async findFirstMinisterOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMinisterOrThrowArgs): Promise<Minister | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).minister.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
