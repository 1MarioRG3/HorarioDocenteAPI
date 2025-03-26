import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Turno } from "./Turno";
import { Grupo } from "./Grupo";

@Entity()
export class Horario extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_horario" })
    id: number;

    @Column()
    semana: string;

    @OneToMany(()=>Turno,(turno)=>turno.horario)
    turnos!:Turno[];

    @ManyToOne(()=>Grupo,(grupo)=>grupo.horarios)
    @JoinColumn({name:"grupo_id"})
    grupo!:Grupo;
}