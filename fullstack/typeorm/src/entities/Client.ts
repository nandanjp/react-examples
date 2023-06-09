import { Entity, Column, OneToMany, ManyToMany, } from "typeorm";
import { Person } from "./utils/Person";
import { Transactions } from "./Transaction";
import { Banker } from "./Banker";

@Entity()
export class Client extends Person
{
    @Column({ type: 'numeric' })
    balance: number;

    @Column({
        type: 'boolean',
        default: true,
        name: "active"
    })
    isActive: boolean;

    @Column({
        type: "json"
    })
    additionalInfo: {
        age: number;
        hair_color: string;
    };

    @Column({
        type: "simple-array"
    })
    family_members: string[];

    @OneToMany(() => Transactions, transaction => transaction.client) //foreign key on many side not one side
    transactions: Transactions[];

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[];
}