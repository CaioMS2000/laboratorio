import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EnrollmentOrderByWithRelationInput } from "../../../inputs/EnrollmentOrderByWithRelationInput";
import { EnrollmentWhereInput } from "../../../inputs/EnrollmentWhereInput";
import { EnrollmentWhereUniqueInput } from "../../../inputs/EnrollmentWhereUniqueInput";
import { EnrollmentScalarFieldEnum } from "../../../../enums/EnrollmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyEnrollmentArgs {
  @TypeGraphQL.Field(_type => EnrollmentWhereInput, {
    nullable: true
  })
  where?: EnrollmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EnrollmentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EnrollmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: EnrollmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EnrollmentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "studentId" | "courseId" | "grade"> | undefined;
}
