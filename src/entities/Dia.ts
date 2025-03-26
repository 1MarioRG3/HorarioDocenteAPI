import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Turno } from "./Turno";

/**
 * @swagger
 * definitions:
 *   Dia:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       nombre:
 *         type: string
 *         description: Nombre del dia
 *         example: Lunes
 */
@Entity()
export class Dia extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_dia" })
    id: number;

    @Column()
    nombre: string;

    @OneToMany(()=>Turno,(turno)=>turno.dia)
    turnos!:Turno[];
}