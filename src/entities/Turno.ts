import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Dia } from "./Dia";
import { Horario } from "./Horario";
/**
 * @swagger
 * 
 * definitions:
 *   Turno:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       hora_inicio:
 *         type: string
 *         description: Hora a la que inicia el turno
 *         example: 9:00AM
 *       hora_fin:
 *         type: string
 *         description: Hora a la que finaliza el turno
 *         example: 10:30AM
 *       materia:
 *         type: string
 *         description: Nombre de la materia que se impartira
 *         example: Programacion Web
 *       local:
 *         type: string
 *         description: Nombre del local donde se impartira el turno
 *         example: Aula 304
 *       profesor:
 *         type: string
 *         description: Nombre del profesor que impartira el turno
 *         example: Herminio
 *       dia_id:
 *         type: number
 *         description: Identificador del dia en el que se impartira el turno
 *         example: 1 
 *       horario_id:
 *         type: number
 *         description: Identificador del horario al que pertenece este turno
 *         example: 1
 */
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