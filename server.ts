import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import { route } from './routes/usersRoute.js';

const app: Express = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

/* routes */
app.use('/users', route);

const databaseName = 'alexander-wallden'; // Set name of database

mongoose.connect(`mongodb://localhost:27017/${databaseName}`).then(() => {
  console.log('Connnected to database!!');
});

app.get('/', (req, res) => {
  res.json('Server up and running!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
