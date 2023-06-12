import { Entity, Column, ManyToMany, OneToMany } from "typeorm";
import { Person } from "./utils/Person";
import { Transactions } from "./Transaction";
import { Banker } from "./Banker";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Client extends Person
{
    @Field(() => Number)
    @Column({ type: "int" })
    balance: number;

    @Field(() => [String])
    @Column({ type: "simple-array" })
    family_members: string[];

    @OneToMany(() => Transactions, transaction => transaction.client)
    transactions: Transactions[];

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[];
}