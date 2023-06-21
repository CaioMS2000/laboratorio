import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentCreateManyInput } from "../../../inputs/EnrollmentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEnrollmentArgs {
  @TypeGraphQL.Field(_type => [EnrollmentCreateManyInput], {
    nullable: false
  })
  data!: EnrollmentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
