import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "./App.css";
import expenseData from "../components/expenseData";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [expenses,setExpenses] = useLocalStorage('expenses',expenseData);
  // const [localData,setLocalData] = useLocalStorage('myNum',[1,2,3]);
  return (
    <>
      <h1>Expensive Tracker</h1>
      <main>
        <ExpenseForm setExpenses={setExpenses}/>
        <ExpenseTable expenses={expenses} setExpenses={setExpenses}/>
      </main>
    </>
  );
}

export default App;
