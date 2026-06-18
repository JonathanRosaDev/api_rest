import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'api_rest',
      version: '1.0.0',
      description: 'API para gerenciamento de usuários, alunos e fotos',
    },
    servers: [
      {
        url: process.env.APP_URL || 'http://localhost:3001',
        description: 'Servidor atual',
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
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
