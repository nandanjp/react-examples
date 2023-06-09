import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Person } from "./utils/Person";
import { Client } from "./Client";

@Entity()
export class Banker extends Person
{
    @Column({ unique: true, length: 10 })
    employee_number: string;

    @ManyToMany(() => Client)
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: "banker",
            referencedColumnName: "id" //id of banker
        },
        inverseJoinColumn: {
            name: "client",
            referencedColumnName: "id" //client id
        }
    })
    clients: Client[];
}