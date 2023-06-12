import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "./Album";
import { Genre } from "./Genre";
import { Artist } from "./Artist";

@Entity()
export class Track extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Album, album => album.tracks)
    album: Album;

    @ManyToMany(() => Artist, artist => artist.tracks)
    @JoinTable({
        name: "track_artists",
        joinColumn: {
            name: "track_name",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "artist_names",
            referencedColumnName: "id"
        }
    })
    artists: Artist[];

    @ManyToMany(() => Genre, genre => genre.tracks)
    @JoinTable({
        name: "track_genres",
        joinColumn: {
            name: "track_name",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "genres",
            referencedColumnName: "id"
        }
    })
    genres: Genre[];

    @Column({ type: "date" })
    release_date: Date;
}