import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateManyCourseInput } from "../inputs/MinisterCreateManyCourseInput";

@TypeGraphQL.InputType("MinisterCreateManyCourseInputEnvelope", {
  isAbstract: true
})
export class MinisterCreateManyCourseInputEnvelope {
  @TypeGraphQL.Field(_type => [MinisterCreateManyCourseInput], {
    nullable: false
  })
  data!: MinisterCreateManyCourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
