import { Request, Response } from "express";
import { Jefe } from "../entities/Jefe";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
    const { usuario, password } = req.body;

    const jefe = await Jefe.findOneBy({ usuario: usuario });
    if (jefe) {
        if (await jefe.comparePassword(password)) {
            const token = jwt.sign({ id: jefe.id }, process.env.JWT_SECRET || 'secret');
            res.status(200).json(token);
        } else {
            res.status(401).json({message:"Usuario o contraseña invalida"});
        }
    } else {
        res.status(401).json({message:"Usuario o contraseña invalida"});
    }
}
export const masterLogin = async (req: Request, res: Response) => {
    const { password } = req.body;
    if (password === process.env.JWT_MASTERPASSWORD) {
        const token = jwt.sign("MASTER", process.env.JWT_SECRET || 'secret');
        res.status(200).json({token: token});
    } else {
        res.status(401).json({message:"Master login invalido"});
    }
}