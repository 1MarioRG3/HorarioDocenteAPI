import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Grupo } from "./Grupo";

/**
 * @swagger
 * definitions:
 *   Facultad:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       nombre:
 *         type: string
 *         description: Nombre de la facultad
 *         example: FIO
 */
@Entity()
export class Facultad extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_facultad" })
    id: number;

    @Column()
    nombre: string;

    @OneToMany(()=>Grupo, (grupo)=> grupo.facultad)
    grupos !: Grupo[];
}