import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnrollmentCreateManyCourseInput } from "../inputs/EnrollmentCreateManyCourseInput";

@TypeGraphQL.InputType("EnrollmentCreateManyCourseInputEnvelope", {
  isAbstract: true
})
export class EnrollmentCreateManyCourseInputEnvelope {
  @TypeGraphQL.Field(_type => [EnrollmentCreateManyCourseInput], {
    nullable: false
  })
  data!: EnrollmentCreateManyCourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
