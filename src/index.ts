import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import { AppDataSource } from './db';

import { swaggerSpec } from './swagger';
import swaggerUi from 'swagger-ui-express';
import { Request,Response } from 'express';

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


    } catch (error) {
        console.log(`OCURRIO UN ERROR AL INICIAR EL SERVIDOR`);
    }
}
main();


