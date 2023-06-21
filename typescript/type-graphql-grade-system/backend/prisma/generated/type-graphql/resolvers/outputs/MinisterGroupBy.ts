import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterAvgAggregate } from "../outputs/MinisterAvgAggregate";
import { MinisterCountAggregate } from "../outputs/MinisterCountAggregate";
import { MinisterMaxAggregate } from "../outputs/MinisterMaxAggregate";
import { MinisterMinAggregate } from "../outputs/MinisterMinAggregate";
import { MinisterSumAggregate } from "../outputs/MinisterSumAggregate";

@TypeGraphQL.ObjectType("MinisterGroupBy", {
  isAbstract: true
})
export class MinisterGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  teacherId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  courseId!: number;

  @TypeGraphQL.Field(_type => MinisterCountAggregate, {
    nullable: true
  })
  _count!: MinisterCountAggregate | null;

  @TypeGraphQL.Field(_type => MinisterAvgAggregate, {
    nullable: true
  })
  _avg!: MinisterAvgAggregate | null;

  @TypeGraphQL.Field(_type => MinisterSumAggregate, {
    nullable: true
  })
  _sum!: MinisterSumAggregate | null;

  @TypeGraphQL.Field(_type => MinisterMinAggregate, {
    nullable: true
  })
  _min!: MinisterMinAggregate | null;

  @TypeGraphQL.Field(_type => MinisterMaxAggregate, {
    nullable: true
  })
  _max!: MinisterMaxAggregate | null;
}
