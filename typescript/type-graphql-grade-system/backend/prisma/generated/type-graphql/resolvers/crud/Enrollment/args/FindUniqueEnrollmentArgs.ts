import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentWhereUniqueInput } from "../../../inputs/EnrollmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: false
  })
  where!: EnrollmentWhereUniqueInput;
}
