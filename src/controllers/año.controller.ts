import { Request,Response } from 'express';
import { Año } from '../entities/Año';

export const getAllAños = async (req:Request,res:Response) => {
  try {
    const años = await Año.find();
    res.status(200).json(años);
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal" });
  }
};

export const getAñoById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const año = await Año.findOneBy({id:id});
    if(año){
      res.status(200).json(año);
    }else{
      res.status(404).json({ message: "No se encontro el año"});
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal"});
  }
};

export const createNewAño = async (req:Request,res:Response) => {
  try{
    const {nombre} = req.body;
    const newAño = new Año();
    newAño.nombre = nombre;
    await newAño.save();
    res.status(204).json();
  } catch(error){
    res.status(500).json({ message: "Algo salio mal"});
  }
}

export const updateNewAño = async (req:Request,res:Response) => {
  try{
    const id = parseInt(req.params.id);
    const año = await Año.findOneBy({id:id});
    const {nombre} = req.body;
    if(año){
      año.nombre = nombre;
      await año.save();
      res.status(204).json();
    }else{
      res.status(404).json({ message: "No se encontro el año"});
    }
  } catch(error){
    res.status(500).json({ message: "Algo salio mal"});
  }
}

export const deleteAñoById = async (req:Request,res:Response) => {
  try {
    const id = parseInt(req.params.id);
    const año = await Año.findOneBy({id:id});
    if(año){
      await año.remove();
      res.status(204).json();
    }else{
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ message: "Algo salio mal"});
  }
};