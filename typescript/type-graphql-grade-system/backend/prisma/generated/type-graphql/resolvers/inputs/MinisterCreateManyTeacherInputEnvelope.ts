import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MinisterCreateManyTeacherInput } from "../inputs/MinisterCreateManyTeacherInput";

@TypeGraphQL.InputType("MinisterCreateManyTeacherInputEnvelope", {
  isAbstract: true
})
export class MinisterCreateManyTeacherInputEnvelope {
  @TypeGraphQL.Field(_type => [MinisterCreateManyTeacherInput], {
    nullable: false
  })
  data!: MinisterCreateManyTeacherInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
