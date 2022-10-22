import express from 'express';
import usersRoutes from './routes/users.routes.js';
import indexRoutes from './routes/index.routes.js';
import { PORT } from './config.js';


const app = express();

app.use(express.json())

app.use(usersRoutes);
app.use(indexRoutes);

app.listen(PORT);
console.log('server running on port 3000');