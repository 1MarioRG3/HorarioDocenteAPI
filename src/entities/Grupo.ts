import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne, BaseEntity } from "typeorm";
import { Año } from "./Año";
import { Facultad } from "./Facultad";
import { Horario } from "./Horario";

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