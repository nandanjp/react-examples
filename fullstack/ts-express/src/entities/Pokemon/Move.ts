import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class Move extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    level_learned_at: number;

    @ManyToMany(() => Pokemon)
    @JoinTable({
        name: "pokemon-moves",
        joinColumn: {
            name: "move",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "pokemon",
            referencedColumnName: "id"
        }
    })
    pokemon: Pokemon[];
}