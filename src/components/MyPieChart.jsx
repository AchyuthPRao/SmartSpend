// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import {  collection, getDocs } from 'firebase/firestore';
// import {db} from '../config/firebase-config'; // Import your Firebase config

// async function FetchDataFire()  {
//     const querySnapShot = await getDocs(collection(db, "transactions"))

//     const data = [];
//     querySnapShot.forEach((doc) =>{
//         data.push({id: doc.id , ...doc.data()});
//     });
//     return data;
// }

// const MyPieChart = () => {
//    const [userData, setUserData] = useState([]);

//    useEffect(() => {
//     async function FetchData() {
//         const data = await FetchDataFire();
//         setUserData(data);
//     }
//     FetchData();
//    }, []);
//     return (
//         <div>
//             {/* <Doughnut
//                 data={chartData}
//                 options={{
//                     // Customize options as needed
//                 }}
//             /> */}
//             <div className="">
//                 {userData.map((user) => (
//                     <div key={user.id} className='mb-4'>
//                         <p className='text-xl'>{user.transactionType}</p>
//                         <p className='text-xl'>{user.transactionAmount}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MyPieChart;
'use client'
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config'; // Import your Firebase config
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import "../App.css"

async function FetchDataFire() {
  const querySnapShot = await getDocs(collection(db, "transactions"))

  const data = [];
  querySnapShot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const MyPieChart = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const data = await FetchDataFire();
      setUserData(data);
    }
    FetchData();
  }, []);

  // Extract transaction types and amounts for chart data
  const chartData = {
    labels: userData.map((user) => (
       <div key={user.id}></div>
        ,user.transactionType )),
    datasets: [
      {
        data: userData.map((user) => user.transactionAmount),
        backgroundColor: userData.map((user) =>
        user.transactionType === 'expense' ? 'rgba(255, 0, 0)' : user.transactionType === 'investments' ? 'rgba(255, 220, 0, 1)' : 'rgba(0, 128, 0)' 
      ),
      },
    ],
  };

  return (
    <div>
        <div className="mt-2 donut d-block " style={{width:'300px' , height:'300px'}}>
        <div>
      <h1 className='boold mt-2 mx-2' style={{fontWeight:'900'}}>Your Financial Analysis</h1>
      </div>
        <Doughnut
        data={chartData}
        style={{border:'2px solid black', borderRadius:'50%'}}
        options={{
            plugins: {
                legend: {
                    display: false, // Set to false to hide labels
                  },
              },
          aspectRatio: 1
        }}
       
      />
      
      
        </div>
{/*      
      <div className="">
        {userData.map((user) => (
          <div key={user.id} className='mb-4'>
            <p className='text-xl'>{user.transactionType}</p>
            <p className='text-xl'>{user.transactionAmount}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MyPieChart;