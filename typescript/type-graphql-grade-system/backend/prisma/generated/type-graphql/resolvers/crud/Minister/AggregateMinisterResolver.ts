import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMinisterArgs } from "./args/AggregateMinisterArgs";
import { Minister } from "../../../models/Minister";
import { AggregateMinister } from "../../outputs/AggregateMinister";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Minister)
export class AggregateMinisterResolver {
  @TypeGraphQL.Query(_returns => AggregateMinister, {
    nullable: false
  })
  async aggregateMinister(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMinisterArgs): Promise<AggregateMinister> {
    return getPrismaFromContext(ctx).minister.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
