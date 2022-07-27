// import express from 'express'
// import { createCar, getAllCars } from './src/cars.js';

// const app = express();//this gives the next instructions to the following code. it gives the rules. 
// const PORT = 3002;
// app.use(express.json());

// //put our routes here
// app.get('/cars', getAllCars);
// app.post('/cars', createCar)

// //gets him ready to give instructiosn 
// app.listen(PORT, () => {
//     console.log(`listening on http://localhost:${PORT}...`)
// })

import express from 'express';
import { createCar, getAllCars } from './src/cars.js';

const app = express();
const PORT = 3002;
app.use(express.json());

// put our routes here
app.get('/cars', getAllCars);
app.post('/cars', createCar);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/ ...`);
});


// sudo 'im the f'ing boss'