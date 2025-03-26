import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity, Unique, BeforeInsert, OneToOne } from "typeorm";
import { Año } from "./Año";
import * as bcrypt from 'bcrypt';
/**
 * @swagger
 * definitions:
 *   Jefe:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         description: Identificador único
 *         example: 123
 *       usuario:
 *         type: string
 *         description: Nombre del usuario
 *         example: Jefe
 *       password:
 *         type: string
 *         description: Constraseña encriptada
 *         example: asdklasjdklsadjaskldjlwpaeioasdkl
 *       año_id:
 *         type: number
 *         description: Identificador del año que del cual es Jefe
 *         example: 1
 */
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