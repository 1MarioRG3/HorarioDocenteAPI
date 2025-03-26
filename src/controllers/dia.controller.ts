import { Request,Response } from 'express';
import { Dia } from '../entities/Dia';

export const getAllDia = async (req:Request,res:Response) => {
  try {
    const dias = await Dia.find();
    res.status(200).json(dias);
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getDiaById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const dia = await Dia.findOneBy({id:id});
    if(dia){
      res.status(200).json(dia);
    }else{
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal"});
  }
};

export const createDia = async (req:Request,res:Response) => {
  try{
    const {nombre} = req.body;
    const newDia = new Dia();
    newDia.nombre = nombre;
    await newDia.save();
    res.status(204).json();
  } catch(error){
    res.status(500).json({ message: "Algo salio mal"});
  }
}

export const updateDia = async (req:Request,res:Response) => {
  try{
    const id = parseInt(req.params.id);
    const dia = await Dia.findOneBy({id:id});
    const {nombre} = req.body;
    if(dia){
      dia.nombre = nombre;
      await dia.save();
      res.status(204).json();
    }else{
      res.status(404).json();
    }
  } catch(error){
    res.status(500).json({ message: "Algo salio mal"});
  }
}

export const deleteDiaById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const dia = await Dia.findOneBy({id:id});
    if(dia){
      await dia.remove();
      res.status(204).json();
    }else{
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal"});
  }
};