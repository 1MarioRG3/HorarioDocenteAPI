import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Turno } from "./Turno";
import { Grupo } from "./Grupo";
/**
 * @swagger
 * definitions:
 *   Horario:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       semana:
 *         type: string
 *         description: Semana del horario
 *         example: Semana 1
 *       grupo_id:
 *         type: number
 *         description: Id del Grupo al que pertenece el Horario
 *         example: 1
 */
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