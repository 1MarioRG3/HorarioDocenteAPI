import { Request, Response } from 'express';
import { Horario } from '../entities/Horario';
import { Grupo } from '../entities/Grupo';
import { HorarioDTO } from '../dtos/HorarioDTO';


export const getAllHorario = async (req: Request, res: Response) => {
  try {
    const horarios = await Horario.find({relations:['grupo']});
    res.status(200).json(HorarioDTO.fromEntities(horarios));
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getHorarioById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const horario = await Horario.findOne({ where:{id:id}, relations:['grupo'] });
    if (horario) {
      res.status(200).json(HorarioDTO.fromEntity(horario));
    } else {
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const createHorario = async (req: Request, res: Response) => {
  try {
    const { semana, grupo_id } = req.body;
    const grupo = await Grupo.findOneBy({ id: grupo_id });

    const newHorario = new Horario();
    if (grupo) {
      newHorario.grupo = grupo;
    } else {
      res.status(404).json({ message: "No se encuentra el grupo" });
    }
    if (semana) {
      newHorario.semana = semana;
    } else {
      res.status(500).json({ message: "No se ha proporcionado una semana para el horario" });
    }
    await newHorario.save();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
}

export const updateHorario = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const horario = await Horario.findOneBy({ id: id });
    const { semana, grupo_id } = req.body;

    if (horario) {
      if (semana) {
        horario.semana = semana;
      }
      if (grupo_id) {
        const grupo = await Grupo.findOneBy({ id: grupo_id });
        if (grupo) {
          horario.grupo = grupo;
        } else {
          res.status(404).json({ message: "Grupo no encontrado" });
        }
      }
      await horario.save();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "No se encontro el horario" });
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
}

export const deleteHorarioById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const horario = await Horario.findOneBy({ id: id });
    if (horario) {
      await horario.remove();
      res.status(204).json();
    } else {
      res.status(404).json({message: "Horario no encontrado"});
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

