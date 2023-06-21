import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentCreateInput } from "../../../inputs/EnrollmentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentCreateInput, {
    nullable: false
  })
  data!: EnrollmentCreateInput;
}
