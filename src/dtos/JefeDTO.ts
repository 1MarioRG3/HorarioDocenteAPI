import { Jefe } from "../entities/Jefe";

export class JefeDTO {
    id: number;
    usuario: string;
    password: string;
    año_id: number;

    static fromEntity(entity: Jefe): JefeDTO {
        const dto = new JefeDTO();
        dto.id = entity.id;
        dto.usuario = entity.usuario;
        dto.password = entity.password;
        dto.año_id = entity.año.id;
        return dto;
    }
    static fromEntities(entities: Jefe[]): JefeDTO[] {
        return entities.map(e => this.fromEntity(e));
    }
}