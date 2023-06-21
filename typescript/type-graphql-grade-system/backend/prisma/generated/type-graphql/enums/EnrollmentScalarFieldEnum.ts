import * as TypeGraphQL from "type-graphql";

export enum EnrollmentScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  studentId = "studentId",
  courseId = "courseId",
  grade = "grade"
}
TypeGraphQL.registerEnumType(EnrollmentScalarFieldEnum, {
  name: "EnrollmentScalarFieldEnum",
  description: undefined,
});
