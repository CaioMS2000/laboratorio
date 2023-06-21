import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentAvgAggregate } from "../outputs/EnrollmentAvgAggregate";
import { EnrollmentCountAggregate } from "../outputs/EnrollmentCountAggregate";
import { EnrollmentMaxAggregate } from "../outputs/EnrollmentMaxAggregate";
import { EnrollmentMinAggregate } from "../outputs/EnrollmentMinAggregate";
import { EnrollmentSumAggregate } from "../outputs/EnrollmentSumAggregate";

@TypeGraphQL.ObjectType("AggregateEnrollment", {
  isAbstract: true
})
export class AggregateEnrollment {
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
