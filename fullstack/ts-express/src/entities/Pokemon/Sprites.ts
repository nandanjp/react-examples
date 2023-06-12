import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class Sprites extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    back_default: string;

    @Column()
    back_shiny: string;

    @Column()
    front_default: string;

    @Column()
    front_shiny: string;

    @OneToOne(() => Pokemon, pokemon => pokemon.sprites)
    pokemon: Pokemon;
}