// import { dbConnect } from "./dbConnect.js";


// export function getAllCars(req, res) {
//   // connect to db
//   const db = dbConnect();
//   // get all docs from cars collection
//     db.collection('car').get()
//         .then(collection => {
//         // reshape collection to array
//         const cars = collection.docs.map(doc => doc.data())
//         // send array to respond
//         res.send(cars);
//         })
//         .catch(err => res.status(500).send(err))


// }


import { dbConnect } from "./dbConnect.js";


export function getAllCars(req, res) {
  // connect to db
  const db = dbConnect();
  // get all docs from cars collection
  db.collection('cars').get()
    .then(collection => {
      // reshape collection to array
      const cars = collection.docs.map(doc => doc.data());
      // send array to response
      res.send(cars);
    })
    .catch(err => res.status(500).send(err))
}

export function createCar(req, res) {
    // get a new car from request
    const newCar = req.body;
    // connect to database
    // add that car to cars collection
    // send back new doc id
}
