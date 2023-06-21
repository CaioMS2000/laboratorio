import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentUpdateManyMutationInput } from "../../../inputs/EnrollmentUpdateManyMutationInput";
import { EnrollmentWhereInput } from "../../../inputs/EnrollmentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentUpdateManyMutationInput, {
    nullable: false
  })
  data!: EnrollmentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  where?: EnrollmentWhereInput | undefined;
}
