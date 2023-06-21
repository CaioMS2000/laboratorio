import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentWhereInput } from "../inputs/EnrollmentWhereInput";

@TypeGraphQL.InputType("EnrollmentListRelationFilter", {
  isAbstract: true
})
export class EnrollmentListRelationFilter {
  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  every?: EnrollmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  some?: EnrollmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  none?: EnrollmentWhereInput | undefined;
}
