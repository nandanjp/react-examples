import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class Stats extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    hp: number;

    @Column()
    attack: number;

    @Column()
    defense: number;

    @Column()
    special_attack: number;

    @Column()
    special_defense: number;

    @Column()
    speed: number;

    @OneToOne(() => Pokemon, pokemon => pokemon.stats)
    pokemon: Pokemon;
}