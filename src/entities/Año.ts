import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity } from "typeorm";
import { Jefe } from "./Jefe";
import { Grupo } from "./Grupo";

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