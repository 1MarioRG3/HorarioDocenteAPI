import { Request,Response } from 'express';
import { Facultad } from '../entities/Facultad';

export const getAllFacultad = async (req:Request,res:Response) => {
  try {
    const fac = await Facultad.find();
    res.status(200).json(fac);
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getFacultadById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const fac = await Facultad.findOneBy({id:id});
    if(fac){
      res.status(200).json(fac);
    }else{
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal"});
  }
};

export const createFac = async (req:Request,res:Response) => {
  try{
    const {nombre} = req.body;
    const newFac = new Facultad();
    newFac.nombre = nombre;
    await newFac.save();
    res.status(204).json();
  } catch(error){
    res.status(500).json({ message: "Algo salio mal"});
  }
}

export const updateFac = async (req:Request,res:Response) => {
  try{
    const id = parseInt(req.params.id);
    const fac = await Facultad.findOneBy({id:id});
    const {nombre} = req.body;
    if(fac){
      fac.nombre = nombre;
      await fac.save();
      res.status(204).json();
    }else{
      res.status(404).json();
    }
  } catch(error){
    res.status(500).json({ message: "Algo salio mal"});
  }
}

export const deleteFacultadById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const fac = await Facultad.findOneBy({id:id});
    if(fac){
      await fac.remove();
      res.status(204).json();
    }else{
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal"});
  }
};