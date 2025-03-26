import { Request, Response } from 'express';
import { Jefe } from '../entities/Jefe';
import { Año } from '../entities/Año';
import { JefeDTO } from '../dtos/JefeDTO';


export const getAllJefe = async (req: Request, res: Response) => {
    try {
        const jefes = await Jefe.find({relations:['año']});
        const jefesDTO = JefeDTO.fromEntities(jefes);
        res.status(200).json(jefesDTO);
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal"});
    }
};

export const getJefeById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const jefe = await Jefe.findOne({where:{ id: id },relations:['año']});
        if (jefe) {
            res.status(200).json(JefeDTO.fromEntity(jefe));
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
};

export const createJefe = async (req: Request, res: Response) => {
    try {
        const { usuario, password, año_id } = req.body;
        const año = await Año.findOneBy({ id: año_id });

        const newJefe = new Jefe();
        if (año) {
            newJefe.año = año;
            console.log(año.id);
        } else {
            res.status(404).json({ message: "No se encuentra el año" });
        }
        if (usuario) {
            newJefe.usuario = usuario;
        } else {
            res.status(500).json({ message: "Envie un nombre de usuario valido" });
        }
        if (password) {
            newJefe.password = password;
        } else {
            res.status(500).json({ message: "Envie una contraseña valida" });
        }
        await newJefe.save();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
}

export const updateJefe = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const jefe = await Jefe.findOneBy({ id: id });
        const { usuario, password, año_id } = req.body;

        if (jefe) {
            if (usuario) {
                jefe.usuario = usuario;
            }
            if (password) {
                jefe.password = password;
            }
            if (año_id) {
                const año = await Año.findOneBy({ id: año_id });
                if (año) {
                    jefe.año = año;
                } else {
                    res.status(404).json({ message: "Año no encontrado" });
                }
            }
            await jefe.save();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "No se encontro el jefe" });
        }
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
}

export const deleteJefeById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const jefe = await Jefe.findOneBy({ id: id });
        if (jefe) {
            await jefe.remove();
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Jefe no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Algo salio mal" });
    }
};

