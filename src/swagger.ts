import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Horario Documentation',
        version: '1.0.0',
        description: 'Documentación de la API Horario',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT||"3000"}`,
          description: 'Local server',
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./src/routes/año.router.ts'], // Ajusta según tu estructura de archivos
  };

  export const swaggerSpec = swaggerJsdoc(options);
