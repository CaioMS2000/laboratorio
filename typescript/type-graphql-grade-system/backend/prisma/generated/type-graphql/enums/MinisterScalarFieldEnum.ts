import * as TypeGraphQL from "type-graphql";

export enum MinisterScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  teacherId = "teacherId",
  courseId = "courseId"
}
TypeGraphQL.registerEnumType(MinisterScalarFieldEnum, {
  name: "MinisterScalarFieldEnum",
  description: undefined,
});
