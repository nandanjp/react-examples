import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, UpdateDateColumn, CreateDateColumn, OneToOne, ManyToMany, JoinColumn } from "typeorm";
import { Ability } from "./Ability";
import { Move } from "./Move";
import { Sprites } from "./Sprites";
import { Stats } from "./Stats";
import { Type } from "./Type";

@Entity()
export class Pokemon extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ unique: true, type: "int" })
    pokedex: number;

    @ManyToMany(() => Type, type => type.pokemon)
    types: Type[];

    @OneToOne(() => Stats, stats => stats.pokemon)
    @JoinColumn()
    stats: Stats;

    @ManyToMany(() => Ability, ability => ability.pokemon)
    abilities: Ability[];

    @ManyToMany(() => Move)
    moves: Move[];

    @OneToOne(() => Sprites, sprites => sprites.pokemon)
    @JoinColumn()
    sprites: Sprites;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}