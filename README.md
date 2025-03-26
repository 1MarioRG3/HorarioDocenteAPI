# 📚 API de Horario Docente

![Node.js](https://img.shields.io/badge/Node.js-14.x%2B-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-%23007ACC)
![Swagger](https://img.shields.io/badge/Swagger-UI-%2385EA2D)
![JWT](https://img.shields.io/badge/JWT-Auth-%23000000)

API para la gestión de horarios docentes en instituciones educativas, desarrollada con Node.js, Express y TypeScript.

## 🌟 Características principales

- ✅ Gestión completa de horarios docentes
- ✅ Autenticación JWT para el Jefe de año y para el administrador del sistema (Master User)
- ✅ Documentación interactiva con Swagger UI
- ✅ Base de datos PostgreSQL con TypeORM

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/horario-docente-api.git
cd horario-docente-api
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
# Editar el archivo .env con tus valores
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```



## 🔒 Autenticación

La API usa JWT para autenticación. Incluye estos headers:

```
master-token: <token-secreto>  # Para acceder a todas las rutas
jefe-token: <token-secreto>  # Para acceder a las rutas administrativas del horario y de los turnos 
```

## 📄 Documentación API

Accede a la documentación interactiva en:
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)


## 🌍 Variables de entorno

| Variable            | Descripción                     | Valor por defecto |
|---------------------|---------------------------------|-------------------|
| PORT                | Puerto del servidor             | 3000              |
| DB_HOST             | Host de PostgreSQL              | localhost         |
| DB_PORT             | Puerto de PostgreSQL            | 5432              |
| DB_USERNAME         | Usuario de PostgreSQL           | postgres          |
| DB_PASSWORD         | Contraseña de PostgreSQL        | postgres          |
| DB_NAME             | Nombre de la base de datos      | horario_docente   |
| JWT_SECRET          | Secreto para JWT                | secret            |
| JWT_MASTERPASSWORD  | Contraseña del Administrador    | master123         |


---

Hecho por MarioRG - [@1MarioRG3]([https://github.com/tu-usuario](https://github.com/1MarioRG3)])
