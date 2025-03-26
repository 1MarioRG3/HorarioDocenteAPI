import { Request, Response } from 'express';
import { Turno } from '../entities/Turno';
import { Horario } from '../entities/Horario';
import { Dia } from '../entities/Dia';
import { TurnoDTO } from '../dtos/TurnoDTO';

export const getAllTurno = async (req: Request, res: Response) => {
    try {
        const turnos = await Turno.find({relations:['dia','horario']});
        res.status(200).json(TurnoDTO.fromEntities(turnos));
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
};

export const getTurnoById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const turno = await Turno.findOne({where:{id:id},relations:['dia','horario']});
        if (turno) {
            res.status(200).json(TurnoDTO.fromEntity(turno));
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
};

export const createTurno = async (req: Request, res: Response) => {
    try {
        const { hora_inicio,hora_fin,materia,local,profesor,dia_id,horario_id} = req.body;
        const dia = await Dia.findOneBy({ id: dia_id });
        const horario = await Horario.findOneBy({id:horario_id});

        const newTurno = new Turno();
        if (dia) {
            newTurno.dia = dia;
        } else {
            res.status(404).json({ message: "No se encontro el dia" });
        }
        if (horario) {
            newTurno.horario = horario;
        } else {
            res.status(404).json({ message: "No se encontro el horario" });
        }
        if (hora_inicio) {
            newTurno.horaInicio = hora_inicio;
        } else {
            res.status(500).json({ message: "Envie una hora de inicio" });
        }
        if (hora_fin) {
            newTurno.horaFin = hora_fin;
        } else {
            res.status(500).json({ message: "Envie una hora de fin" });
        }
        if (materia) {
            newTurno.materia = materia;
        } else {
            res.status(500).json({ message: "Envie una materia" });
        }
        if (local) {
            newTurno.local = local;
        } else {
            res.status(500).json({ message: "Envie un local" });
        }
        if (profesor) {
            newTurno.profesor = profesor;
        } else {
            res.status(500).json({ message: "Envie un profesor" });
        }
        await newTurno.save();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
}

export const updateTurno = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const turno = await Turno.findOneBy({ id: id });
        const { hora_inicio,hora_fin,materia,local,profesor,dia_id,horario_id} = req.body;

        if (turno) {
            if (hora_inicio) {
                turno.horaInicio = hora_inicio;
            }
            if (hora_fin) {
                turno.horaFin = hora_fin;
            }
            if (materia) {
                turno.materia = materia;
            }
            if (local) {
                turno.local = local;
            }
            if (profesor) {
                turno.profesor = profesor;
            }
            if (dia_id) {
                const dia = await Dia.findOneBy({ id: dia_id });
                if (dia) {
                    turno.dia = dia;
                } else {
                    res.status(404).json({ message: "Dia no encontrado" });
                }
            }
            if (horario_id) {
                const horario = await Horario.findOneBy({ id: horario_id });
                if (horario) {
                    turno.horario = horario;
                } else {
                    res.status(404).json({ message: "Horario no encontrado" });
                }
            }
            await turno.save();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "No se encontro el turno" });
        }
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
}

export const deleteTurnoById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const turno = await Turno.findOneBy({ id: id });
        if (turno) {
            await turno.remove();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Turno no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
};

