import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Course: crudResolvers.CourseCrudResolver,
  Enrollment: crudResolvers.EnrollmentCrudResolver,
  Minister: crudResolvers.MinisterCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Course: {
    aggregateCourse: actionResolvers.AggregateCourseResolver,
    createManyCourse: actionResolvers.CreateManyCourseResolver,
    createOneCourse: actionResolvers.CreateOneCourseResolver,
    deleteManyCourse: actionResolvers.DeleteManyCourseResolver,
    deleteOneCourse: actionResolvers.DeleteOneCourseResolver,
    findFirstCourse: actionResolvers.FindFirstCourseResolver,
    findFirstCourseOrThrow: actionResolvers.FindFirstCourseOrThrowResolver,
    courses: actionResolvers.FindManyCourseResolver,
    course: actionResolvers.FindUniqueCourseResolver,
    getCourse: actionResolvers.FindUniqueCourseOrThrowResolver,
    groupByCourse: actionResolvers.GroupByCourseResolver,
    updateManyCourse: actionResolvers.UpdateManyCourseResolver,
    updateOneCourse: actionResolvers.UpdateOneCourseResolver,
    upsertOneCourse: actionResolvers.UpsertOneCourseResolver
  },
  Enrollment: {
    aggregateEnrollment: actionResolvers.AggregateEnrollmentResolver,
    createManyEnrollment: actionResolvers.CreateManyEnrollmentResolver,
    createOneEnrollment: actionResolvers.CreateOneEnrollmentResolver,
    deleteManyEnrollment: actionResolvers.DeleteManyEnrollmentResolver,
    deleteOneEnrollment: actionResolvers.DeleteOneEnrollmentResolver,
    findFirstEnrollment: actionResolvers.FindFirstEnrollmentResolver,
    findFirstEnrollmentOrThrow: actionResolvers.FindFirstEnrollmentOrThrowResolver,
    enrollments: actionResolvers.FindManyEnrollmentResolver,
    enrollment: actionResolvers.FindUniqueEnrollmentResolver,
    getEnrollment: actionResolvers.FindUniqueEnrollmentOrThrowResolver,
    groupByEnrollment: actionResolvers.GroupByEnrollmentResolver,
    updateManyEnrollment: actionResolvers.UpdateManyEnrollmentResolver,
    updateOneEnrollment: actionResolvers.UpdateOneEnrollmentResolver,
    upsertOneEnrollment: actionResolvers.UpsertOneEnrollmentResolver
  },
  Minister: {
    aggregateMinister: actionResolvers.AggregateMinisterResolver,
    createManyMinister: actionResolvers.CreateManyMinisterResolver,
    createOneMinister: actionResolvers.CreateOneMinisterResolver,
    deleteManyMinister: actionResolvers.DeleteManyMinisterResolver,
    deleteOneMinister: actionResolvers.DeleteOneMinisterResolver,
    findFirstMinister: actionResolvers.FindFirstMinisterResolver,
    findFirstMinisterOrThrow: actionResolvers.FindFirstMinisterOrThrowResolver,
    ministers: actionResolvers.FindManyMinisterResolver,
    minister: actionResolvers.FindUniqueMinisterResolver,
    getMinister: actionResolvers.FindUniqueMinisterOrThrowResolver,
    groupByMinister: actionResolvers.GroupByMinisterResolver,
    updateManyMinister: actionResolvers.UpdateManyMinisterResolver,
    updateOneMinister: actionResolvers.UpdateOneMinisterResolver,
    upsertOneMinister: actionResolvers.UpsertOneMinisterResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Course: ["aggregateCourse", "createManyCourse", "createOneCourse", "deleteManyCourse", "deleteOneCourse", "findFirstCourse", "findFirstCourseOrThrow", "courses", "course", "getCourse", "groupByCourse", "updateManyCourse", "updateOneCourse", "upsertOneCourse"],
  Enrollment: ["aggregateEnrollment", "createManyEnrollment", "createOneEnrollment", "deleteManyEnrollment", "deleteOneEnrollment", "findFirstEnrollment", "findFirstEnrollmentOrThrow", "enrollments", "enrollment", "getEnrollment", "groupByEnrollment", "updateManyEnrollment", "updateOneEnrollment", "upsertOneEnrollment"],
  Minister: ["aggregateMinister", "createManyMinister", "createOneMinister", "deleteManyMinister", "deleteOneMinister", "findFirstMinister", "findFirstMinisterOrThrow", "ministers", "minister", "getMinister", "groupByMinister", "updateManyMinister", "updateOneMinister", "upsertOneMinister"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateCourseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCourseArgs: ["data", "skipDuplicates"],
  CreateOneCourseArgs: ["data"],
  DeleteManyCourseArgs: ["where"],
  DeleteOneCourseArgs: ["where"],
  FindFirstCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCourseOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCourseArgs: ["where"],
  FindUniqueCourseOrThrowArgs: ["where"],
  GroupByCourseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCourseArgs: ["data", "where"],
  UpdateOneCourseArgs: ["data", "where"],
  UpsertOneCourseArgs: ["where", "create", "update"],
  AggregateEnrollmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEnrollmentArgs: ["data", "skipDuplicates"],
  CreateOneEnrollmentArgs: ["data"],
  DeleteManyEnrollmentArgs: ["where"],
  DeleteOneEnrollmentArgs: ["where"],
  FindFirstEnrollmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEnrollmentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEnrollmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEnrollmentArgs: ["where"],
  FindUniqueEnrollmentOrThrowArgs: ["where"],
  GroupByEnrollmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEnrollmentArgs: ["data", "where"],
  UpdateOneEnrollmentArgs: ["data", "where"],
  UpsertOneEnrollmentArgs: ["where", "create", "update"],
  AggregateMinisterArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMinisterArgs: ["data", "skipDuplicates"],
  CreateOneMinisterArgs: ["data"],
  DeleteManyMinisterArgs: ["where"],
  DeleteOneMinisterArgs: ["where"],
  FindFirstMinisterArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMinisterOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMinisterArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMinisterArgs: ["where"],
  FindUniqueMinisterOrThrowArgs: ["where"],
  GroupByMinisterArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMinisterArgs: ["data", "where"],
  UpdateOneMinisterArgs: ["data", "where"],
  UpsertOneMinisterArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Course: relationResolvers.CourseRelationsResolver,
  Enrollment: relationResolvers.EnrollmentRelationsResolver,
  Minister: relationResolvers.MinisterRelationsResolver
};
const relationResolversInfo = {
  User: ["enrollments", "minister"],
  Course: ["enrollments", "minister"],
  Enrollment: ["student", "course"],
  Minister: ["teacher", "course"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "password", "userId", "role"],
  Course: ["id", "name"],
  Enrollment: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  Minister: ["id", "createdAt", "updatedAt", "teacherId", "courseId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "password", "userId", "role", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourse: ["_count", "_avg", "_sum", "_min", "_max"],
  CourseGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEnrollment: ["_count", "_avg", "_sum", "_min", "_max"],
  EnrollmentGroupBy: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMinister: ["_count", "_avg", "_sum", "_min", "_max"],
  MinisterGroupBy: ["id", "createdAt", "updatedAt", "teacherId", "courseId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["enrollments", "minister"],
  UserCountAggregate: ["id", "email", "password", "userId", "role", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "password", "userId", "role"],
  UserMaxAggregate: ["id", "email", "password", "userId", "role"],
  CourseCount: ["enrollments", "minister"],
  CourseCountAggregate: ["id", "name", "_all"],
  CourseAvgAggregate: ["id"],
  CourseSumAggregate: ["id"],
  CourseMinAggregate: ["id", "name"],
  CourseMaxAggregate: ["id", "name"],
  EnrollmentCountAggregate: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade", "_all"],
  EnrollmentAvgAggregate: ["id", "studentId", "courseId", "grade"],
  EnrollmentSumAggregate: ["id", "studentId", "courseId", "grade"],
  EnrollmentMinAggregate: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  EnrollmentMaxAggregate: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  MinisterCountAggregate: ["id", "createdAt", "updatedAt", "teacherId", "courseId", "_all"],
  MinisterAvgAggregate: ["id", "teacherId", "courseId"],
  MinisterSumAggregate: ["id", "teacherId", "courseId"],
  MinisterMinAggregate: ["id", "createdAt", "updatedAt", "teacherId", "courseId"],
  MinisterMaxAggregate: ["id", "createdAt", "updatedAt", "teacherId", "courseId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "userId", "role", "enrollments", "minister"],
  UserOrderByWithRelationInput: ["id", "email", "password", "userId", "role", "enrollments", "minister"],
  UserWhereUniqueInput: ["id", "email", "userId"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "userId", "role", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "userId", "role"],
  CourseWhereInput: ["AND", "OR", "NOT", "id", "name", "enrollments", "minister"],
  CourseOrderByWithRelationInput: ["id", "name", "enrollments", "minister"],
  CourseWhereUniqueInput: ["id"],
  CourseOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  CourseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  EnrollmentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "studentId", "courseId", "grade", "student", "course"],
  EnrollmentOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade", "student", "course"],
  EnrollmentWhereUniqueInput: ["id"],
  EnrollmentOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade", "_count", "_avg", "_max", "_min", "_sum"],
  EnrollmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  MinisterWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "teacherId", "courseId", "teacher", "course"],
  MinisterOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "teacherId", "courseId", "teacher", "course"],
  MinisterWhereUniqueInput: ["id"],
  MinisterOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "teacherId", "courseId", "_count", "_avg", "_max", "_min", "_sum"],
  MinisterScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "teacherId", "courseId"],
  UserCreateInput: ["email", "password", "userId", "role", "enrollments", "minister"],
  UserUpdateInput: ["email", "password", "userId", "role", "enrollments", "minister"],
  UserCreateManyInput: ["id", "email", "password", "userId", "role"],
  UserUpdateManyMutationInput: ["email", "password", "userId", "role"],
  CourseCreateInput: ["name", "enrollments", "minister"],
  CourseUpdateInput: ["name", "enrollments", "minister"],
  CourseCreateManyInput: ["id", "name"],
  CourseUpdateManyMutationInput: ["name"],
  EnrollmentCreateInput: ["createdAt", "updatedAt", "grade", "student", "course"],
  EnrollmentUpdateInput: ["createdAt", "updatedAt", "grade", "student", "course"],
  EnrollmentCreateManyInput: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  EnrollmentUpdateManyMutationInput: ["createdAt", "updatedAt", "grade"],
  MinisterCreateInput: ["createdAt", "updatedAt", "teacher", "course"],
  MinisterUpdateInput: ["createdAt", "updatedAt", "teacher", "course"],
  MinisterCreateManyInput: ["id", "createdAt", "updatedAt", "teacherId", "courseId"],
  MinisterUpdateManyMutationInput: ["createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  EnrollmentListRelationFilter: ["every", "some", "none"],
  MinisterListRelationFilter: ["every", "some", "none"],
  EnrollmentOrderByRelationAggregateInput: ["_count"],
  MinisterOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "password", "userId", "role"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "password", "userId", "role"],
  UserMinOrderByAggregateInput: ["id", "email", "password", "userId", "role"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  CourseCountOrderByAggregateInput: ["id", "name"],
  CourseAvgOrderByAggregateInput: ["id"],
  CourseMaxOrderByAggregateInput: ["id", "name"],
  CourseMinOrderByAggregateInput: ["id", "name"],
  CourseSumOrderByAggregateInput: ["id"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  CourseRelationFilter: ["is", "isNot"],
  EnrollmentCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  EnrollmentAvgOrderByAggregateInput: ["id", "studentId", "courseId", "grade"],
  EnrollmentMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  EnrollmentMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  EnrollmentSumOrderByAggregateInput: ["id", "studentId", "courseId", "grade"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  MinisterCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "teacherId", "courseId"],
  MinisterAvgOrderByAggregateInput: ["id", "teacherId", "courseId"],
  MinisterMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "teacherId", "courseId"],
  MinisterMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "teacherId", "courseId"],
  MinisterSumOrderByAggregateInput: ["id", "teacherId", "courseId"],
  EnrollmentCreateNestedManyWithoutStudentInput: ["create", "connectOrCreate", "createMany", "connect"],
  MinisterCreateNestedManyWithoutTeacherInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  EnrollmentUpdateManyWithoutStudentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MinisterUpdateManyWithoutTeacherNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnrollmentCreateNestedManyWithoutCourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  MinisterCreateNestedManyWithoutCourseInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnrollmentUpdateManyWithoutCourseNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MinisterUpdateManyWithoutCourseNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutEnrollmentsInput: ["create", "connectOrCreate", "connect"],
  CourseCreateNestedOneWithoutEnrollmentsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutEnrollmentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CourseUpdateOneRequiredWithoutEnrollmentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutMinisterInput: ["create", "connectOrCreate", "connect"],
  CourseCreateNestedOneWithoutMinisterInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutMinisterNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CourseUpdateOneRequiredWithoutMinisterNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnrollmentCreateWithoutStudentInput: ["createdAt", "updatedAt", "grade", "course"],
  EnrollmentCreateOrConnectWithoutStudentInput: ["where", "create"],
  EnrollmentCreateManyStudentInputEnvelope: ["data", "skipDuplicates"],
  MinisterCreateWithoutTeacherInput: ["createdAt", "updatedAt", "course"],
  MinisterCreateOrConnectWithoutTeacherInput: ["where", "create"],
  MinisterCreateManyTeacherInputEnvelope: ["data", "skipDuplicates"],
  EnrollmentUpsertWithWhereUniqueWithoutStudentInput: ["where", "update", "create"],
  EnrollmentUpdateWithWhereUniqueWithoutStudentInput: ["where", "data"],
  EnrollmentUpdateManyWithWhereWithoutStudentInput: ["where", "data"],
  EnrollmentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "studentId", "courseId", "grade"],
  MinisterUpsertWithWhereUniqueWithoutTeacherInput: ["where", "update", "create"],
  MinisterUpdateWithWhereUniqueWithoutTeacherInput: ["where", "data"],
  MinisterUpdateManyWithWhereWithoutTeacherInput: ["where", "data"],
  MinisterScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "teacherId", "courseId"],
  EnrollmentCreateWithoutCourseInput: ["createdAt", "updatedAt", "grade", "student"],
  EnrollmentCreateOrConnectWithoutCourseInput: ["where", "create"],
  EnrollmentCreateManyCourseInputEnvelope: ["data", "skipDuplicates"],
  MinisterCreateWithoutCourseInput: ["createdAt", "updatedAt", "teacher"],
  MinisterCreateOrConnectWithoutCourseInput: ["where", "create"],
  MinisterCreateManyCourseInputEnvelope: ["data", "skipDuplicates"],
  EnrollmentUpsertWithWhereUniqueWithoutCourseInput: ["where", "update", "create"],
  EnrollmentUpdateWithWhereUniqueWithoutCourseInput: ["where", "data"],
  EnrollmentUpdateManyWithWhereWithoutCourseInput: ["where", "data"],
  MinisterUpsertWithWhereUniqueWithoutCourseInput: ["where", "update", "create"],
  MinisterUpdateWithWhereUniqueWithoutCourseInput: ["where", "data"],
  MinisterUpdateManyWithWhereWithoutCourseInput: ["where", "data"],
  UserCreateWithoutEnrollmentsInput: ["email", "password", "userId", "role", "minister"],
  UserCreateOrConnectWithoutEnrollmentsInput: ["where", "create"],
  CourseCreateWithoutEnrollmentsInput: ["name", "minister"],
  CourseCreateOrConnectWithoutEnrollmentsInput: ["where", "create"],
  UserUpsertWithoutEnrollmentsInput: ["update", "create"],
  UserUpdateWithoutEnrollmentsInput: ["email", "password", "userId", "role", "minister"],
  CourseUpsertWithoutEnrollmentsInput: ["update", "create"],
  CourseUpdateWithoutEnrollmentsInput: ["name", "minister"],
  UserCreateWithoutMinisterInput: ["email", "password", "userId", "role", "enrollments"],
  UserCreateOrConnectWithoutMinisterInput: ["where", "create"],
  CourseCreateWithoutMinisterInput: ["name", "enrollments"],
  CourseCreateOrConnectWithoutMinisterInput: ["where", "create"],
  UserUpsertWithoutMinisterInput: ["update", "create"],
  UserUpdateWithoutMinisterInput: ["email", "password", "userId", "role", "enrollments"],
  CourseUpsertWithoutMinisterInput: ["update", "create"],
  CourseUpdateWithoutMinisterInput: ["name", "enrollments"],
  EnrollmentCreateManyStudentInput: ["id", "createdAt", "updatedAt", "courseId", "grade"],
  MinisterCreateManyTeacherInput: ["id", "createdAt", "updatedAt", "courseId"],
  EnrollmentUpdateWithoutStudentInput: ["createdAt", "updatedAt", "grade", "course"],
  MinisterUpdateWithoutTeacherInput: ["createdAt", "updatedAt", "course"],
  EnrollmentCreateManyCourseInput: ["id", "createdAt", "updatedAt", "studentId", "grade"],
  MinisterCreateManyCourseInput: ["id", "createdAt", "updatedAt", "teacherId"],
  EnrollmentUpdateWithoutCourseInput: ["createdAt", "updatedAt", "grade", "student"],
  MinisterUpdateWithoutCourseInput: ["createdAt", "updatedAt", "teacher"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

