import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentUpdateInput } from "../../../inputs/EnrollmentUpdateInput";
import { EnrollmentWhereUniqueInput } from "../../../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentUpdateInput, {
    nullable: false
  })
  data!: EnrollmentUpdateInput;

  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;
}
