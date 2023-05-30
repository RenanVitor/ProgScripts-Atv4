import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Match } from "./Match";

@Entity({ name: "team" })
export class Team {
    // define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Match, (match) => match.host)
    host: Match[];

    @OneToMany(() => Match, (match) => match.visitor)
    visitor: Match[];
}
