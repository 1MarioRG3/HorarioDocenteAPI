import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import path from 'path';

import app from './app';
import { AppDataSource } from './db';

import { swaggerSpec } from './swagger';
import swaggerUi from 'swagger-ui-express';
import { Request, Response } from 'express';

const PORT = process.env.PORT || '3000';

async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(PORT);
        console.log(`SERVIDOR RUN: http://localhost:${PORT}/`);
        //Swagger Docs
        app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.get('docs.json', (req: Request, res: Response) => {
            res.setHeader("Content-Type", "application/json");
            res.send(swaggerSpec);
        });
        console.log(`DOCUMENTACION DISPONIBLE EN: http://localhost:${process.env.PORT || "3000"}/docs`);
        //MODELO ENTIDAD RELACION
        app.get('/api/er-diagram', (req:Request, res:Response) => {
            const imagePath = path.join(__dirname, '../public/Diagrama Entidad-Relación.png');

            if (!fs.existsSync(imagePath)) {
                res.status(404).send('Diagrama ER no encontrado');
            }

            res.sendFile(imagePath);
        });


    } catch (error) {
        console.log(`OCURRIO UN ERROR AL INICIAR EL SERVIDOR`);
    }
}
main();


