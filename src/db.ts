import { DataSource } from 'typeorm';
import { Año } from './entities/Año';
import { Dia } from './entities/Dia';
import { Facultad } from './entities/Facultad';
import { Grupo } from './entities/Grupo';
import { Horario } from './entities/Horario';
import { Jefe } from './entities/Jefe';
import { Turno } from './entities/Turno';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT||""),
    database: process.env.DB_NAME,
    entities: [Año,Dia,Facultad,Grupo,Horario,Jefe,Turno],
    logging: true,
    synchronize: true
});