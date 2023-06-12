import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Track } from "./Track";

@Entity()
export class Genre extends BaseEntity
{
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Track, track => track.genres)
    tracks: Track[];
}