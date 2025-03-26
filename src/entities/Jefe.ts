import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity, Unique, BeforeInsert } from "typeorm";
import { Año } from "./Año";
import * as bcrypt from 'bcrypt';

@Entity()
export class Jefe extends BaseEntity{
    @PrimaryGeneratedColumn({ name: "id_jefe" })
    id: number;

    @Column({unique:true})
    usuario: string;

    @Column()
    password: string;
    
    @ManyToOne(()=> Año, (año)=> año.jefes)
    @JoinColumn({name: 'año_id'})
    año:Año; 

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    async comparePassword(attempt: string): Promise<boolean> {
      return await bcrypt.compare(attempt, this.password);
    }

}