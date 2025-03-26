import { Grupo } from "../entities/Grupo";
import { Horario } from "../entities/Horario";

export class HorarioDTO {  
    id: number;
    semana:string;
    grupo_id:number;

    static fromEntity(entity: Horario): HorarioDTO {
        const dto = new HorarioDTO();
        dto.id = entity.id;
        dto.semana = entity.semana;
        dto.grupo_id = entity.grupo.id;
        return dto;
    }
    static fromEntities(entities: Horario[]): HorarioDTO[] {
        return entities.map(e => this.fromEntity(e));
    }
}