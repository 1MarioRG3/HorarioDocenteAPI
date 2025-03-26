import { Request, Response } from 'express';
import { Grupo } from '../entities/Grupo';
import { Facultad } from '../entities/Facultad';
import { Año } from '../entities/Año';
import { GrupoDTO } from '../dtos/GrupoDTO';

export const getAllGrupo = async (req: Request, res: Response) => {
  try {
    const grupo = await Grupo.find({relations:['facultad','año']});
    res.status(200).json(GrupoDTO.fromEntities(grupo));
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getGrupoById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const grupo = await Grupo.findOne({where:{id:id},relations:['facultad','año']});
    if (grupo) {
      res.status(200).json(GrupoDTO.fromEntity(grupo));
    } else {
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const createGrupo = async (req: Request, res: Response) => {
  try {
    const { nombre, año_id, facultad_id } = req.body;
    const facultad = await Facultad.findOneBy({ id: facultad_id });
    const año = await Año.findOneBy({ id: año_id });

    const newGrupo = new Grupo();
    if (facultad) {
      newGrupo.facultad = facultad;
    } else {
      res.status(404).json({ message: "No se encuentra la facultad" });
    }
    if (año) {
      newGrupo.año = año;
    } else {
      res.status(404).json({ message: "No se encuentra el año" });
    }
    if (nombre) {
      newGrupo.nombre = nombre;
    } else {
      res.status(500).json({ message: "No se ha proporcionado un nombre para el grupo" });
    }
    await newGrupo.save();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
}

export const updateGrupo = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const grupo = await Grupo.findOneBy({ id: id });
    const { nombre, facultad_id, año_id } = req.body;

    if (grupo) {
      if (nombre) {
        grupo.nombre = nombre;
      }
      if (facultad_id) {
        const facultad = await Facultad.findOneBy({ id: facultad_id });
        if (facultad) {
          grupo.facultad = facultad;
        } else {
          res.status(404).json({ message: "Facultad no encontrada" });
        }
      }
      if (año_id) {
        const año = await Año.findOneBy({ id: año_id });
        if (año) {
          grupo.año = año;
        } else {
          res.status(404).json({ message: "Año no encontrado" });
        }
      }
      await grupo.save();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "No se encontro el grupo" });
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
}

export const deleteGrupoById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const grupo = await Grupo.findOneBy({ id: id });
    if (grupo) {
      await grupo.remove();
      res.status(204).json();
    } else {
      res.status(404).json({message: "Grupo no encontrado"});
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

