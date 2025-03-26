import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity, OneToOne } from "typeorm";
import { Jefe } from "./Jefe";
import { Grupo } from "./Grupo";

/**
 * @swagger
 * definitions:
 *   Year:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       nombre:
 *         type: string
 *         description: Nombre del año docente
 *         example: 1er Año
 */
@Entity()
export class Año extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_año" })
    id: number;

    @Column()
    nombre: string;

    @OneToMany(()=>Jefe, (jefe)=> jefe.año)
    jefes !: Jefe[];
    
    @OneToMany(()=>Grupo, (grupo)=> grupo.año)
    grupos !: Grupo[];
}