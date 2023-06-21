import * as TypeGraphQL from "type-graphql";

export enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
