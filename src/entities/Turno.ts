import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Dia } from "./Dia";
import { Horario } from "./Horario";

@Entity()
export class Turno extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_turno" })
    id: number;

    @Column({ name: "hora_inicio"})
    horaInicio: string;

    @Column({ name: "hora_fin"})
    horaFin: string;

    @Column()
    materia: string;

    @Column()
    local: string;

    @Column()
    profesor: string;

    @ManyToOne(()=>Dia,(dia)=>dia.turnos)
    @JoinColumn({name : "dia_id"})
    dia!:Dia;

    @ManyToOne(()=>Horario,(horario)=>horario.turnos)
    @JoinColumn({name:"horario_id"})
    horario!:Horario;

}