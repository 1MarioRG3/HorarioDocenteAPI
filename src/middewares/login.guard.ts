import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

interface IPayload {
  id: number;
}

export const bossGuard = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('jefe-token');
    const masterToken = req.header('master-token');
    try {
      if (masterToken) {
        jwt.sign(masterToken || "", process.env.JWT_SECRET || 'secret');
        next();
        return;
      }
    } catch (error) {
      res.status(401).json({ message: 'Token invalido' });
      return;
    }

    if (!token) {
      res.status(401).json({ message: 'Se requiere autenticacion' });
    }
    try {
      const payload = jwt.verify(token || "", process.env.JWT_SECRET || 'secret') as IPayload;
      req.jefe_id = payload.id;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token invalido' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Se requiere autenticacion' });
  }
};

export const masterGuard = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('master-token');
    try {
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET || 'secret');
      }else{
        res.status(401).json({message:'Se requiere un token'});
        return;
      }
      next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalido' });
      return;
    }
  } catch (error) {
    res.status(401).json({ message: 'Se requiere autenticacion' });
    return;
  }
};