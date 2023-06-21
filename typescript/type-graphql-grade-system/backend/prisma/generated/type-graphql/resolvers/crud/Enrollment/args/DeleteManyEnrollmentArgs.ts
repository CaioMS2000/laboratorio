import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentWhereInput } from "../../../inputs/EnrollmentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  where?: EnrollmentWhereInput | undefined;
}
