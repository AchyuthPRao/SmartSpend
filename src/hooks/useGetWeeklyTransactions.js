// import { useEffect, useState } from "react";
// import {
//   query,
//   collection,
//   where,
//   orderBy,
//   onSnapshot,
// } from "firebase/firestore";
// import { db } from "../config/firebase-config";
// import { useGetUserInfo } from "./useGetUserInfo";
// import { useGetTransactions } from "./useGetTransactions";


// export const useGetWeeklyTransactions = () => {

//   const transactionCollectionRef = collection(db, "transactions");
//   const { userID } = useGetUserInfo();
//   const { transactions } = useGetTransactions(); 
  
//     // function getWeekNumber(date) {
//     //     const currentDate = new Date(date);
//     //     currentDate.setHours(0, 0, 0, 0);
//     //     // Find the first Thursday of the year
//     //     currentDate.setDate(currentDate.getDate() + 3 - (currentDate.getDay() + 6) % 7);
//     //     const week1 = new Date(currentDate.getFullYear(), 0, 4);
      
//     //     return Math.ceil(((currentDate - week1) / 86400000 + 1) / 7);
//     //   }

//   const getWeeklyTransactions = () => {
//     // Calculate weekly transactions here
//     // You can use the transactions data from useGetTransactions
//     // and group transactions by week as per your requirements
//     // This depends on how you define a week (e.g., 7 days, Sunday to Saturday)

//     // Example code to get transactions per week
//         let unsubscribe;
//         try {
//           const queryTransactions = query(
//             transactionCollectionRef,
//             where("userID", "==", userID),
//             orderBy("createdAt")
//           );
    
//     const weeklyTransactions = {};

//     transactions.forEach((transaction) => {
//       const createdAt = new Date(transaction.createdAt);
//       const weekNumber = getWeekNumber(createdAt); // Implement getWeekNumber function

//       if (!weeklyTransactions[weekNumber]) {
//         weeklyTransactions[weekNumber] = [];
//       }

//       weeklyTransactions[weekNumber].push(transaction);
//     });
    

//     return weeklyTransactions;
//   }catch (err) {
//     console.error(err);
//   };

//   useEffect(() => {
//     getWeeklyTransactions();
//   }, []);
  
// }}
import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import { useGetTransactions } from "./useGetTransactions";



export const useGetWeeklyTransactions = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();
  const { transactions } = useGetTransactions();

  function getWeekNumber(date) {
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0);
    // Find the first Thursday of the year
    currentDate.setDate(currentDate.getDate() + 3 - (currentDate.getDay() + 6) % 7);
    const week1 = new Date(currentDate.getFullYear(), 0, 4);

    return Math.ceil(((currentDate - week1) / 86400000 + 1) / 7);
  }
  const getWeeklyTransactions = () => {
    return new Promise((resolve, reject) => {
      const weeklyTransactions = {};

      transactions.forEach((transaction) => {
        const createdAt = new Date(transaction.createdAt);
        const weekNumber = getWeekNumber(createdAt);

        if (!weeklyTransactions[weekNumber]) {
          weeklyTransactions[weekNumber] = [];
        }

        weeklyTransactions[weekNumber].push(transaction);
      });

      resolve(weeklyTransactions);
    });
  };
 
  return { getWeeklyTransactions };
  
};
