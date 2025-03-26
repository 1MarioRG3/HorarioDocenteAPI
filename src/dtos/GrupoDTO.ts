import { Grupo } from "../entities/Grupo";

export class GrupoDTO {
    
    id: number;
    nombre: string;
    año_id: number;
    facultad_id: number;

    static fromEntity(entity: Grupo): GrupoDTO {
        const dto = new GrupoDTO();
        dto.id = entity.id;
        dto.nombre = entity.nombre;
        dto.año_id = entity.año.id;
        dto.facultad_id = entity.facultad.id;
        return dto;
    }
    static fromEntities(entities: Grupo[]): GrupoDTO[] {
        return entities.map(e => this.fromEntity(e));
    }
}