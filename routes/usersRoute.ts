import { Router, Request, Response } from 'express';
import UserModel from '../models/UserModel.js';

const route = Router();

route.get('/', async (req: Request, res: Response) => {  
  res.json('Response from /users');
});

export default route;
