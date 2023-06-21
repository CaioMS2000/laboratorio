import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentCreateInput } from "../../../inputs/EnrollmentCreateInput";
import { EnrollmentUpdateInput } from "../../../inputs/EnrollmentUpdateInput";
import { EnrollmentWhereUniqueInput } from "../../../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;

  @TypeGraphQL.Field(_type => EnrollmentCreateInput, {
    nullable: false
  })
  create!: EnrollmentCreateInput;

  @TypeGraphQL.Field(_type => EnrollmentUpdateInput, {
    nullable: false
  })
  update!: EnrollmentUpdateInput;
}
