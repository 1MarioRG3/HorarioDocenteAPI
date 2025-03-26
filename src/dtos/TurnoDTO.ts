import { Turno } from "../entities/Turno";

export class TurnoDTO {
    id: number;
    hora_inicio: string;
    hora_fin: string;
    materia: string;
    local: string;
    profesor: string;
    dia_id: number;
    horario_id: number;

    static fromEntity(entity: Turno): TurnoDTO {
        const dto = new TurnoDTO();
        dto.id = entity.id;
        dto.hora_inicio = entity.horaInicio;
        dto.hora_fin = entity.horaFin;
        dto.materia = entity.materia;
        dto.local = entity.local;
        dto.profesor = entity.profesor;
        dto.dia_id = entity.dia.id;
        dto.horario_id = entity.horario.id;
        return dto;
    }
    static fromEntities(entities: Turno[]): TurnoDTO[] {
        return entities.map(e => this.fromEntity(e));
    }
}