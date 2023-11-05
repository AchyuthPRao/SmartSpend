import React, { useEffect, useState } from 'react';
import invest from '../images/invest.png';
import Navbar from './Navbar';
import { useGetWeeklyTransactions } from '../hooks/useGetWeeklyTransactions';

export default function SmartInvest() {
  const [weeklyInvestments, setWeeklyInvestments] = useState([]);
  const { getWeeklyTransactions } = useGetWeeklyTransactions();

  useEffect(() => {
    getWeeklyTransactions()
      .then((weeklyTransactions) => {
        // You can do further processing with the weeklyTransactions data here
        const processedInvestments = {};
        for (const weekNumber in weeklyTransactions) {
          const transactions = weeklyTransactions[weekNumber];
          const investmentAmount = transactions.reduce((total, transaction) => {
            return total + transaction.amount * 0.10;
          }, 0);
          processedInvestments[weekNumber] = investmentAmount;
        }
        setWeeklyInvestments(processedInvestments);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="invest">
        <img style={{ width: '30%' }} src={invest} alt="" />
        <div className="txt my-3">Smart Investments</div>
        <h1>
          <pre>{JSON.stringify(weeklyInvestments,2)}</pre>
        </h1>
      </div>
    </>
  );
}

