import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenseform from "./components/Expenseform";
import Alert from "./components/Alert";
import Expenselist from "./components/Expenselist";
import uuid from "react-uuid";
import React, { useState, useEffect } from "react";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("we called useeffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  //edit items
  const editItems = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  //alert after action
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  //clear item
  const clearItems = (id) => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items deleted" });
  };
  //delete items
  const deleteItems = (id) => {
    let tempExpense = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpense);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  //add items
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // change amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  // submittion
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "item edited" });
      } else {
        const singleExpense = { id: uuid(), charge: charge, amount: amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }

      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "no item" });
    }
  };

  return (
    <div className="container-sm">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="model-content m-3">
        <div className="modal-header  text-center">
          <h1 className="modal-title">Budget Calculator</h1>
        </div>
      </div>

      <main className="App">
        <Expenseform
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <Expenselist
          expenses={expenses}
          clearItems={clearItems}
          editItems={editItems}
          deleteItems={deleteItems}
        />
      </main>
      <h2>
        total spending:{" "}
        <span className="bg-success">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h2>
    </div>
  );
}

export default App;
