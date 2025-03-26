import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Turno } from "./Turno";

@Entity()
export class Dia extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_dia" })
    id: number;

    @Column()
    nombre: string;

    @OneToMany(()=>Turno,(turno)=>turno.dia)
    turnos!:Turno[];
}