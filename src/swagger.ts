import swaggerJsdoc from 'swagger-jsdoc';
import { masterGuard } from './middewares/login.guard';

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Horario Documentation',
        version: '1.0.0',
        description: 'DIAGRAMA ENTIDAD-RELACION DE LA BASE DE DATOS: <br><br> <img src="/api/er-diagram" alt="Modelo Entidad-Relación" width="600" >',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT||"3000"}`,
          description: 'Local server',
        },
      ],
      components: {
        securitySchemes: {
          ADMIN: { 
            type: 'apiKey',
            in: 'header',
            name: 'master-token',
            description: 'Token de acceso en el header `master-token`'
          },
          JEFE: {  
            type: 'apiKey',
            in: 'header',
            name: 'jefe-token',
            description: 'Token de acceso en el header `jefe-token`'
          }
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./src/routes/*.ts','./src/entities/*.ts'], // Ajusta según tu estructura de archivos
  };

  export const swaggerSpec = swaggerJsdoc(options);
