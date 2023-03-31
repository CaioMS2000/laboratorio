import { ObjectType, Field, ID } from 'type-graphql';
import { Length } from 'class-validator';

@ObjectType()
export class User{
    @Field(_type => ID)
    id: string

    @Field()
    @Length(1, 100)
    name: string
}