import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEnrollmentArgs } from "./args/AggregateEnrollmentArgs";
import { CreateManyEnrollmentArgs } from "./args/CreateManyEnrollmentArgs";
import { CreateOneEnrollmentArgs } from "./args/CreateOneEnrollmentArgs";
import { DeleteManyEnrollmentArgs } from "./args/DeleteManyEnrollmentArgs";
import { DeleteOneEnrollmentArgs } from "./args/DeleteOneEnrollmentArgs";
import { FindFirstEnrollmentArgs } from "./args/FindFirstEnrollmentArgs";
import { FindFirstEnrollmentOrThrowArgs } from "./args/FindFirstEnrollmentOrThrowArgs";
import { FindManyEnrollmentArgs } from "./args/FindManyEnrollmentArgs";
import { FindUniqueEnrollmentArgs } from "./args/FindUniqueEnrollmentArgs";
import { FindUniqueEnrollmentOrThrowArgs } from "./args/FindUniqueEnrollmentOrThrowArgs";
import { GroupByEnrollmentArgs } from "./args/GroupByEnrollmentArgs";
import { UpdateManyEnrollmentArgs } from "./args/UpdateManyEnrollmentArgs";
import { UpdateOneEnrollmentArgs } from "./args/UpdateOneEnrollmentArgs";
import { UpsertOneEnrollmentArgs } from "./args/UpsertOneEnrollmentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Enrollment } from "../../../models/Enrollment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEnrollment } from "../../outputs/AggregateEnrollment";
import { EnrollmentGroupBy } from "../../outputs/EnrollmentGroupBy";

@TypeGraphQL.Resolver(_of => Enrollment)
export class EnrollmentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEnrollment, {
    nullable: false
  })
  async aggregateEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEnrollmentArgs): Promise<AggregateEnrollment> {
    return getPrismaFromContext(ctx).enrollment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEnrollmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Enrollment, {
    nullable: false
  })
  async createOneEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEnrollmentArgs): Promise<Enrollment> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEnrollmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => Enrollment, {
    nullable: true
  })
  async findFirstEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEnrollmentArgs): Promise<Enrollment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [Enrollment], {
    nullable: false
  })
  async enrollments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEnrollmentArgs): Promise<Enrollment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Enrollment, {
    nullable: true
  })
  async enrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEnrollmentArgs): Promise<Enrollment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEnrollmentArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Enrollment, {
    nullable: true
  })
  async updateOneEnrollment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEnrollmentArgs): Promise<Enrollment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).enrollment.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
