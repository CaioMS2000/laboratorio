import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentAvgAggregate } from "../outputs/EnrollmentAvgAggregate";
import { EnrollmentCountAggregate } from "../outputs/EnrollmentCountAggregate";
import { EnrollmentMaxAggregate } from "../outputs/EnrollmentMaxAggregate";
import { EnrollmentMinAggregate } from "../outputs/EnrollmentMinAggregate";
import { EnrollmentSumAggregate } from "../outputs/EnrollmentSumAggregate";

@TypeGraphQL.ObjectType("EnrollmentGroupBy", {
  isAbstract: true
})
export class EnrollmentGroupBy {
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
  studentId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  courseId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  grade!: number | null;

  @TypeGraphQL.Field(_type => EnrollmentCountAggregate, {
    nullable: true
  })
  _count!: EnrollmentCountAggregate | null;

  @TypeGraphQL.Field(_type => EnrollmentAvgAggregate, {
    nullable: true
  })
  _avg!: EnrollmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => EnrollmentSumAggregate, {
    nullable: true
  })
  _sum!: EnrollmentSumAggregate | null;

  @TypeGraphQL.Field(_type => EnrollmentMinAggregate, {
    nullable: true
  })
  _min!: EnrollmentMinAggregate | null;

  @TypeGraphQL.Field(_type => EnrollmentMaxAggregate, {
    nullable: true
  })
  _max!: EnrollmentMaxAggregate | null;
}
