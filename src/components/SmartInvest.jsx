import React, { useEffect, useState } from 'react';
import invest from '../images/invest.png';
import Navbar from './Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config'; // Import your Firebase config
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import "../App.css"

// import MyPieChart from './MyPieChart';

async function FetchDataFire() {
  const querySnapShot = await getDocs(collection(db, "transactions"))

  const data = [];
  querySnapShot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}
export default function SmartInvest() {
  const [userData, setUserData] = useState([]);
  const {name} = useGetUserInfo();

  useEffect(() => {
    async function FetchData() {
      const data = await FetchDataFire();
      setUserData(data);
    }
    FetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="parent2">
       {/* <div className="rect3">
        {userData.map((user) => (
          <div key={user.id} className='contentInv'>
            {user.transactionType === "income" ? (
             <h5 >Amount Invested </h5>
            ): "" }
            {user.transactionType === "income" ? (
              <>
               <p>Income:{user.transactionAmount}</p>
               </>
            ) : (
              <>
              </>
            )
            }
            {user.transactionType === "income" ? (
             ( Math.floor(user.transactionAmount*0.03) <= 500 ) ? (
              <>
              <p>Invested:{Math.floor(user.transactionAmount*0.03)}</p>
              </>
             ): (<h6>Amount too large</h6> )
            ) : ""
            } 
          </div>
        ))}
      </div> */}
      <div className="rect3">
        <h1>{name}'s Smart Investments</h1>
  <table className="contentInvTable">
    <thead>
      <tr>
        <th>Income</th>
        <th>Invested</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {userData.map((user) => (
        <tr key={user.id} className=''>
          {user.transactionType === "income" ? (
            <>
              <td >Income: {user.transactionAmount}</td>
              <td >
                {Math.floor(user.transactionAmount * 0.03) <= 500 ? (
                  <p>Invested: {Math.floor(user.transactionAmount * 0.03)}</p>
                ) : (
                  <h6 id='h'>Amount too large</h6>
                )}
              </td>
              <td >
              {Math.floor(user.transactionAmount * 0.03) <= 500  ? (<><h6>Amount Invested</h6></>) : (<h6 id='h'>Amount Not Invested</h6>) }
                </td>
            </>
          ) : null}
        </tr>
      ))}
    </tbody>
  </table>
</div>
      <div className="invest">
      <div className="txt">Smart Investments</div>
        <img style={{ width: '100%' }} src={invest} alt="" />
      </div> 
      </div>
    </>
  );
}

