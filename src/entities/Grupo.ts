import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne, BaseEntity } from "typeorm";
import { Año } from "./Año";
import { Facultad } from "./Facultad";
import { Horario } from "./Horario";

/**
 * @swagger
 * definitions:
 *   Grupo:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       nombre:
 *         type: string
 *         description: Nombre del grupo
 *         example: 3304
 *       año_id:
 *         type: number
 *         description: Id del Año al que pertenece el grupo
 *         example: 1
 *       facultad_id:
 *         type: number
 *         description: Id de la Facultad a la que pertenece el grupo
 *         example: 1
 */
@Entity()
export class Grupo extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_grupo" })
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(()=>Año, (año)=> año.grupos)
    @JoinColumn({name: 'año_id'})
    año !: Año;

    @ManyToOne(()=>Facultad, (facultad)=> facultad.grupos)
    @JoinColumn({name: 'facultad_id'})
    facultad !: Facultad;

    @OneToMany(()=>Horario, (horario)=> horario.grupo)
    horarios!: Horario[];
}