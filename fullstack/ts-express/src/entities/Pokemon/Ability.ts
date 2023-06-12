import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class Ability extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "boolean" })
    is_hidden: boolean;

    @ManyToMany(() => Pokemon, pokemon => pokemon.abilities)
    @JoinTable({
        name: "pokemon-abilities",
        joinColumn: {
            name: "ability",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "pokemon",
            referencedColumnName: "id"
        }
    })
    pokemon: Pokemon;
}