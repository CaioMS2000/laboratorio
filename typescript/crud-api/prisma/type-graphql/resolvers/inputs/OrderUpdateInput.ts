import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutOrdersNestedInput } from "../inputs/ProductUpdateManyWithoutOrdersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutOrdersNestedInput } from "../inputs/UserUpdateOneWithoutOrdersNestedInput";

@TypeGraphQL.InputType("OrderUpdateInput", {
  isAbstract: true
})
export class OrderUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutOrdersNestedInput, {
    nullable: true
  })
  customer?: UserUpdateOneWithoutOrdersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutOrdersNestedInput, {
    nullable: true
  })
  products?: ProductUpdateManyWithoutOrdersNestedInput | undefined;
}
