import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Person extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    first_name: string;

    @Field(() => String)
    @Column()
    last_name: string;

    @Field(() => String)
    @Column({ unique: true })
    email: string;

    @Field(() => String)
    @Column({ unique: true, length: 10 })
    card_number: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}