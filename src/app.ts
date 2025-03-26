import express from 'express';
import cors from 'cors';



import añoRouter from './routes/año.router';
import diaRouter from './routes/dia.router';
import facultadRouter from './routes/facultad.router';
import grupoRouter from './routes/grupo.router';
import horarioRouter from './routes/horario.router';
import jefeRouter from './routes/jefe.router';
import turnoRouter from './routes/turno.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());
app.use(cors());
//Routers
app.use("/api",añoRouter);
app.use("/api",diaRouter);
app.use("/api",facultadRouter);
app.use("/api",grupoRouter);
app.use("/api",horarioRouter);
app.use("/api",jefeRouter);
app.use("/api",turnoRouter);
app.use("/api", loginRouter);

export default app;
