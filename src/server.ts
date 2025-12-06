import express, { Request, Response } from 'express'
const app = express()
const port = config.port
import { initDb,  } from './db/query';
import { userRouter } from './routes/users.routes';
import { vehiclesRouter } from './routes/vehicles.routes';
import { bookingRouter } from './routes/booking.routes';
import { authRouter } from './routes/auth.routes';
import config from './index';


app.use(express.json());


app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})

app.use('/api/v1/', userRouter,); 

app.use('/api/v1/', vehiclesRouter,);

app.use('/api/v1/', bookingRouter,);

app.use('/api/v1/', authRouter);





// Initialize the database
initDb();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
