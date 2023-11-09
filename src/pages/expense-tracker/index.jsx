
import { useState , useEffect ,useRef } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { auth } from "../../config/firebase-config";
import Chart from "chart.js/auto";
import Navbar from "../../components/Navbar";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();
  const expensesData = transactions.filter(
    (transaction) => transaction.transactionType === "expense"
  );

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionTotals;

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
  const dates = expensesData.map((transaction) => transaction.createdAt);
  const expenseAmounts = expensesData.map(
    (transaction) => transaction.transactionAmount
  );

  // Get the canvas reference to render the chart
  const chartRef = useRef(null);

  useEffect(() => {
    if (dates.length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Expenses over Time",
              data: expenseAmounts,
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        },
        options: {
          scales: {
            x: [
              {
                type: "time",
                time: {
                  unit: "day", // You can customize the time unit
                },
              },
            ],
            y: [
              {
                ticks: {
                  callback: (value) => `Rs:Rs:{value}`, // Format y-axis labels
                },
              },
            ],
          },
        },
      });
    }
  }, [dates, expenseAmounts]);

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="expense-tracker rect">
        <div className="container m-3 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center ">
          <h1> {name}'s Expense Tracker</h1>
          </div>
          <div className="balance mx-5 boold">
            <h3 className="boold"> Your Balance</h3>
            {balance >= 0 ? <h2> Rs:{balance}</h2> : <h2> -Rs:{balance * -1}</h2>}
          </div>
          <div className="summary mx-5">
            <div className="income mx-5">
              <h4 className="text-white"> Income</h4>
              <p className="boold fs-3">Rs:{income}</p>
            </div>
            <div className="expenses mx-5">
              <h4 className="text-white"> Expenses</h4>
              <p className="boold fs-3">Rs:{expenses}</p>
            </div>
          </div>
          <form className="add-transaction mx-5" onSubmit={onSubmit}>
          <select
  className="my-2 rounded batan"
  value={description}
  required
  onChange={(e) => setDescription(e.target.value)}
>
  <option value="">Add Transaction</option>
  <option value="Income(Credit)">Income</option>
  <option value="Essentials">Essentials</option>
  <option value="Loans">Loans</option>
  <option value="Investments">Investments</option>
  <option value="Misc">Misc</option>
  
</select>
            <input
             className="my-2 rounded bordet"
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
             className="mx-1 form-check-input text-white"
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="text-white fs-5" htmlFor="expense"> Expense</label>
            <input
             className="mx-3 form-check-input"
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label className="text-white fs-5" htmlFor="income"> Income</label>

            <button className="my-3 mx-4 rounded  button2" type="submit"> Add Transaction</button>
          </form>
          {profilePhoto && (
          <div className="profile">
            {" "}
            <img className="profile-photo mx-5" src={profilePhoto} />
            <button className=" mt-3 mx-1 button2" onClick={signUserOut}>
              Sign Out
            </button>
          </div>
        )}
        </div>
      </div>
      
      <div className="transactions rect2">
      <div className="d-flex justify-content-center">
          <h3 className="mt-2 boold"> Transactions</h3>
      </div>
      <div className="mx-3">
      {/* <canvas ref={chartRef}></canvas> */}
      </div>
      
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <li>
                <h4 className="mx-2"> {description} </h4>
                <p className="boold">
                  Rs:{transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "white",
                    }}
                  >
                    {" "}
                    {transactionType}{" "}
                  </label>
                </p>
              </li>
            );
          })}
        </ul>
        
      </div>
    </>
  );
};

