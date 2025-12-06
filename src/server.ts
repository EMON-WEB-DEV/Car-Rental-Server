import express, { Request, Response } from 'express'
const app = express()
const port = 5050
import { initDb,  } from './db/config';
import { userRouter } from './routes/users.routes';
import { vehiclesRouter } from './routes/vehicles.routes';
import { bookingRouter } from './routes/booking.routes';


app.use(express.json());


app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})

app.use('/api/v1/', userRouter,); 

app.use('/api/v1/', vehiclesRouter,);

app.use('/api/v1/', bookingRouter,);





// Initialize the database
initDb();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
