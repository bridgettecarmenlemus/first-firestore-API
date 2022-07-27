// //install library
// import { initializeApp, cert, getApps } from "firebase-admin/app";
// //import library
// import { getFirestore } from "firebase-admin/firestore";
// //import credentials
// import { credentials } from "../credentials.js";

// // connecting to my firebase project, this will last for a period of time, bit we will be running our API for a long period of time. we have to check and make sure "are we already connected"
// // if (we are not on the phone with mom){
// //     call mom ()
// // }
// // export function xxxx (){
// //     initializeApp ({
// //         credential: cert(credentials)
// //     });
// //     return getFirestore ();
// // }
// // getApps is a method that is going to return an array

// export function dbConnect() {
//   if (!getApps().length) {
//     initializeApp({
//       credential: cert(credentials),
//     });
//   }
//   return getFirestore();
// }
// //now we connect to database
// const db = getFirestore;

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credentials } from "../credentials.js";

export function dbConnect() {
  if(!getApps().length){
    initializeApp({
      credential: cert(credentials)
    });
  }
  return getFirestore();
}