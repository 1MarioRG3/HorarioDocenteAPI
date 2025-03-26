import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Grupo } from "./Grupo";

@Entity()
export class Facultad extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_facultad" })
    id: number;

    @Column()
    nombre: string;

    @OneToMany(()=>Grupo, (grupo)=> grupo.facultad)
    grupos !: Grupo[];
}