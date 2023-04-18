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
  Product: crudResolvers.ProductCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Order: crudResolvers.OrderCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver
  },
  Category: {
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    createOneCategory: actionResolvers.CreateOneCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    category: actionResolvers.FindUniqueCategoryResolver,
    getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
    upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
  },
  Order: {
    aggregateOrder: actionResolvers.AggregateOrderResolver,
    createOneOrder: actionResolvers.CreateOneOrderResolver,
    deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
    deleteOneOrder: actionResolvers.DeleteOneOrderResolver,
    findFirstOrder: actionResolvers.FindFirstOrderResolver,
    findFirstOrderOrThrow: actionResolvers.FindFirstOrderOrThrowResolver,
    orders: actionResolvers.FindManyOrderResolver,
    order: actionResolvers.FindUniqueOrderResolver,
    getOrder: actionResolvers.FindUniqueOrderOrThrowResolver,
    groupByOrder: actionResolvers.GroupByOrderResolver,
    updateManyOrder: actionResolvers.UpdateManyOrderResolver,
    updateOneOrder: actionResolvers.UpdateOneOrderResolver,
    upsertOneOrder: actionResolvers.UpsertOneOrderResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
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
  }
};
const crudResolversInfo = {
  Product: ["aggregateProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
  Category: ["aggregateCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  Order: ["aggregateOrder", "createOneOrder", "deleteManyOrder", "deleteOneOrder", "findFirstOrder", "findFirstOrderOrThrow", "orders", "order", "getOrder", "groupByOrder", "updateManyOrder", "updateOneOrder", "upsertOneOrder"],
  User: ["aggregateUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneProductArgs: ["data"],
  DeleteManyProductArgs: ["where"],
  DeleteOneProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductArgs: ["where"],
  FindUniqueProductOrThrowArgs: ["where"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductArgs: ["data", "where"],
  UpdateOneProductArgs: ["data", "where"],
  UpsertOneProductArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneCategoryArgs: ["data"],
  DeleteManyCategoryArgs: ["where"],
  DeleteOneCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoryArgs: ["where"],
  FindUniqueCategoryOrThrowArgs: ["where"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpdateOneCategoryArgs: ["data", "where"],
  UpsertOneCategoryArgs: ["where", "create", "update"],
  AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneOrderArgs: ["data"],
  DeleteManyOrderArgs: ["where"],
  DeleteOneOrderArgs: ["where"],
  FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOrderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrderArgs: ["where"],
  FindUniqueOrderOrThrowArgs: ["where"],
  GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrderArgs: ["data", "where"],
  UpdateOneOrderArgs: ["data", "where"],
  UpsertOneOrderArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
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
  UpsertOneUserArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
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
  Product: relationResolvers.ProductRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  Order: relationResolvers.OrderRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
  Product: ["categories", "orders"],
  Category: ["products"],
  Order: ["customer", "products"],
  User: ["orders"]
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
  Product: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  Category: ["id", "createdAt", "updatedAt", "name"],
  Order: ["id", "createdAt", "updatedAt", "userId"],
  User: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
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
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoryGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderGroupBy: ["id", "createdAt", "updatedAt", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProductCount: ["categories", "orders"],
  ProductCountAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_all"],
  ProductAvgAggregate: ["quantity"],
  ProductSumAggregate: ["quantity"],
  ProductMinAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  ProductMaxAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  CategoryCount: ["products"],
  CategoryCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  CategoryAvgAggregate: ["id"],
  CategorySumAggregate: ["id"],
  CategoryMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  CategoryMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
  OrderCount: ["products"],
  OrderCountAggregate: ["id", "createdAt", "updatedAt", "userId", "_all"],
  OrderAvgAggregate: ["userId"],
  OrderSumAggregate: ["userId"],
  OrderMinAggregate: ["id", "createdAt", "updatedAt", "userId"],
  OrderMaxAggregate: ["id", "createdAt", "updatedAt", "userId"],
  UserCount: ["orders"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
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
  ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
  ProductOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
  ProductWhereUniqueInput: ["id", "sku"],
  ProductOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "products"],
  CategoryOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "products"],
  CategoryWhereUniqueInput: ["id"],
  CategoryOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  OrderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "customer", "products"],
  OrderOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "userId", "customer", "products"],
  OrderWhereUniqueInput: ["id"],
  OrderOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  ProductCreateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
  ProductUpdateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
  ProductUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  CategoryCreateInput: ["createdAt", "updatedAt", "name", "products"],
  CategoryUpdateInput: ["createdAt", "updatedAt", "name", "products"],
  CategoryUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
  OrderCreateInput: ["id", "createdAt", "updatedAt", "customer", "products"],
  OrderUpdateInput: ["id", "createdAt", "updatedAt", "customer", "products"],
  OrderUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  UserCreateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserUpdateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CategoryListRelationFilter: ["every", "some", "none"],
  OrderListRelationFilter: ["every", "some", "none"],
  CategoryOrderByRelationAggregateInput: ["_count"],
  OrderOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  ProductAvgOrderByAggregateInput: ["quantity"],
  ProductMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  ProductMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  ProductSumOrderByAggregateInput: ["quantity"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProductListRelationFilter: ["every", "some", "none"],
  ProductOrderByRelationAggregateInput: ["_count"],
  CategoryCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  CategoryAvgOrderByAggregateInput: ["id"],
  CategoryMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  CategoryMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  CategorySumOrderByAggregateInput: ["id"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  OrderCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
  OrderAvgOrderByAggregateInput: ["userId"],
  OrderMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
  OrderMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
  OrderSumOrderByAggregateInput: ["userId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserSumOrderByAggregateInput: ["id"],
  CategoryCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "connect"],
  OrderCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CategoryUpdateManyWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
  ProductUpdateManyWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedManyWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProductUpdateManyWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "connect"],
  OrderUpdateManyWithoutCustomerNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CategoryCreateWithoutProductsInput: ["createdAt", "updatedAt", "name"],
  CategoryCreateOrConnectWithoutProductsInput: ["where", "create"],
  OrderCreateWithoutProductsInput: ["id", "createdAt", "updatedAt", "customer"],
  OrderCreateOrConnectWithoutProductsInput: ["where", "create"],
  CategoryUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
  CategoryUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
  CategoryUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
  CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  OrderUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
  OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId"],
  ProductCreateWithoutCategoriesInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "orders"],
  ProductCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  ProductUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
  ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
  UserCreateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserCreateOrConnectWithoutOrdersInput: ["where", "create"],
  ProductCreateWithoutOrdersInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories"],
  ProductCreateOrConnectWithoutOrdersInput: ["where", "create"],
  UserUpsertWithoutOrdersInput: ["update", "create"],
  UserUpdateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  ProductUpsertWithWhereUniqueWithoutOrdersInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutOrdersInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutOrdersInput: ["where", "data"],
  OrderCreateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "products"],
  OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
  OrderUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  CategoryUpdateWithoutProductsInput: ["createdAt", "updatedAt", "name"],
  OrderUpdateWithoutProductsInput: ["id", "createdAt", "updatedAt", "customer"],
  ProductUpdateWithoutCategoriesInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "orders"],
  ProductUpdateWithoutOrdersInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories"],
  OrderUpdateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "products"]
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

