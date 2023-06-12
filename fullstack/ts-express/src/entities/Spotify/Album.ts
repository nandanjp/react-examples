import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Track } from "./Track";
import { Artist } from "./Artist";

@Entity()
export class Album extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    album_type: string;

    @Column()
    total_tracks: number;

    @Column({ type: "date" })
    release_date: Date;

    @ManyToOne(() => Artist)
    @JoinColumn()
    artists: Artist;

    @OneToMany(() => Track, track => track.album)
    @JoinColumn()
    tracks: Track[];
}