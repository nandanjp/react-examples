import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Track } from "./Track";
import { Album } from "./Album";

@Entity()
export class Artist extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "date" })
    debuted: Date;

    @ManyToMany(() => Track, track => track.artists)
    tracks: Track[];

    @OneToMany(() => Album, album => album.artists)
    albums: Album[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}