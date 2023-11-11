
import { useState , useEffect ,useRef } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetCreatedAt } from "../../hooks/useGetCreatedAt";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { auth } from "../../config/firebase-config";
import Navbar from "../../components/Navbar";
import MyPieChart from "../../components/MyPieChart";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config'; // Import your Firebase config



async function FetchDataFire() {
  const querySnapShot = await getDocs(collection(db, "transactions"))

  const data = [];
  querySnapShot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}





export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  // const createdAtData = useGetCreatedAt();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();
  const expensesData = transactions.filter(
    (transaction) => transaction.transactionType === "expense"
  );

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const[date, setDate] = useState("");
  const { balance, income, expenses } = transactionTotals;

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const data = await FetchDataFire();
      setUserData(data);
    }
    FetchData();
  }, []);

// console.log(created_at);
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription("");
    setTransactionAmount("");
  };


  // Get the canvas reference to render the chart


 




  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // const dateData = 
  //   [userData.map((user) => (
  //      <div key={user.id}></div>,
  //       // user.transactionType
  //       `${new Date(user.createdAt.seconds * 1000 + user.createdAt.nanoseconds / 1e6).toLocaleString()}`
  //   )),
  //   ]
  // ;

  return (
    <>
    <Navbar/>
      <div className="expense-tracker rect">
        <div className="container m-3 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center ">
          <h1 style={{fontWeight:'900'}}> {name}'s Expense Tracker</h1>
          </div>
          <div className="balance mx-5 boold">
            <h3 className="boold"> Your Balance</h3>
            {balance >= 0 ? <h2 style={{fontWeight:'700'}}> Rs:{balance}</h2> : <h2  > -Rs:{balance * -1}</h2>}
          </div>
          <div className="summary mx-5">
            <div className="income mx-5">
              <h4 className="text-white"> Income</h4>
              <p className="boold fs-3" style={{fontWeight:'700'}}>Rs:{income}</p>
            </div>
            <div className="expenses mx-5">
              <h4 className="text-white"> Expenses</h4>
              <p className="boold fs-3" style={{fontWeight:'700'}}>Rs:{expenses}</p>
            </div>
          </div>
          
          <div className="rediyo">
          <h3 className="d-block" style={{fontWeight:'600'}}>Transaction Type:</h3>
          <input
             className="mx-1 form-check-input text-white"
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="text-white fs-5 my-1" htmlFor="expense"> Expense</label>
            <div className="rediyo">
          <input
             className="mx-1 form-check-input text-white"
              type="radio"
              id="investments"
              value="investments"
              checked={transactionType === "investments"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="text-white fs-5 my-1 mx-1" htmlFor="expense"> Investment</label>
            </div>
            <input
             className="mx-1 form-check-input"
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="text-white fs-5 my-1" htmlFor="income"> Income</label>
          </div>
         
        
          <form className="add-transaction mx-5" onSubmit={onSubmit}>
          {transactionType === "expense" ? (
          <select
  className="my-2 rounded batan"
  value={description}
  required
  onChange={(e) => setDescription(e.target.value)}
>
  <option value="">Add Transaction</option>
  <option value="Groceries">Groceries</option>
  <option value="Bills">Bills</option>
  <option value="Essentials">Essentials</option>
  <option value="Outings">Outings</option>
  <option value="Misc">Misc</option>
  
</select> ): transactionType === "income" ? (
  <select
  className="my-2 rounded batan"
  value={description}
  required
  onChange={(e) => setDescription(e.target.value)}
>
  <option value="">Add Transaction</option>
  <option value="Salary">Salary</option>
  <option value="Business">Business(Revenue)</option>
  <option value="Rental Income">Rental Income</option>
  <option value="Return on Investments">ROI</option>
  <option value="Misc">Misc</option>
  
</select>

) : (
  <select
  className="my-2 rounded batan"
  value={description}
  required
  onChange={(e) => setDescription(e.target.value)}
>
  <option value="">Add Transaction</option>
  <option value="Stocks">Stocks</option>
  <option value="Real Estate">Real Estate</option>
  <option value="Gold">Gold</option>
  <option value="Bonds">Bonds</option>
  <option value="Mutual Funds">Mutual Funds</option>
  <option value="Misc">Misc</option>
</select>
)}
            <input
             className="my-2 rounded bordet"
              type="number"
              inputMode="none"
              placeholder="Amount(Rs)"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            

            <button className="my-3 mx-4 rounded  button2" type="submit"> Add Transaction</button>
          </form>
          {profilePhoto && (
          <div className="profile">
            {" "}
            <img className="profile-photo " src={profilePhoto} />
            <button className="mt-3 button2" onClick={signUserOut}>
              Sign Out
            </button>
          </div>
        )}
        </div>
      </div>
      <div className="donut mx-4">
      <MyPieChart/>
      <div className="transactions rect2">
      <div className="d-flex justify-content-center">
          <h3 className="my-3 boold" style={{fontWeight:'800'}}> Transactions</h3>
      </div>
      <div className="mx-3">
      {/* <canvas ref={chartRef}></canvas> */}
      </div>
      
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType, formattedCreatedAt   } =
              transaction;
            return (
              <li>
                <h4 className="mx-2" style={{fontWeight:'700'}}> {description} </h4>
                <p className="mx-2 boold fs-4">
                  Rs:{transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "rgba(139, 0, 0, 1)" : transactionType === "income" ? "green" : transactionType === "investments" ? "rgba(223, 180, 12, 1)" : " "
                    }}
                  >
                 {formattedCreatedAt}
                    {" "}
                    {transactionType}{" "}
                    {/* <p></p> */}
                    {/* console.log(getCreatedAtData); */}
                  </label>
                </p>
            
              </li>
            );
          })}
        </ul>
       
      </div>
      </div>
    
     
      
    </>
  );
};

