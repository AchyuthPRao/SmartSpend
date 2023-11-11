
import { useEffect, useState } from "react";
import { useGetTransactions } from "./useGetTransactions";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetCreatedAt = () => {
    const { userID } = useGetUserInfo();
    const { transactions } = useGetTransactions();
    const transaction = transactions.find((t) => t.id === userID);
    if(transaction){
        return new Date(
            transaction.createdAt.seconds * 1000 +
              transaction.createdAt.nanoseconds / 1e6
          ).toLocaleString();
    }
     else{
        return null;
     }
    
  };
  