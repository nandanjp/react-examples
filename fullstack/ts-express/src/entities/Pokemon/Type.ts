import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class Type extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Pokemon, pokemon => pokemon.types)
    @JoinTable({
        name: "pokemon-types",
        joinColumn: {
            name: "types",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "pokemon",
            referencedColumnName: "id"
        }
    })
    pokemon: Pokemon[];
}