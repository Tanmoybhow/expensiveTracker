import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import { useFilterData } from "../hooks/useFilterData";
import ContextMenu from "./ContextMenu";
import EditPopUp from "./EditPopUp";
const ExpenseTable = ({expenses,setExpenses}) => {
  const [filterData,setQuery]=useFilterData(expenses,(data)=> data.category);
  const [sortCallBack,setSortCallBack] = useState(()=> ()=>{});

  const [contextPosition,setContextPosition] = useState({
    left:'',
    top:''
  });
  const [editedData,setEditedData] = useState({
    id:"",
    title:"",
    category:"",
    price:""
  });
  const total = filterData.reduce((acc,curr)=>acc+Number(curr.price),0);
  // function desc(){
  //    setExpenses((prev)=> [...prev.sort((a,b)=> b.price-a.price)]);
  // }
  // function asc(){
  //   setExpenses((prev)=> [...prev.sort((a,b)=> a.price-b.price)]);

  // }
      
  return (
    <>
    <ContextMenu contextPosition={contextPosition} setContextPosition={setContextPosition} setExpenses={setExpenses} expenses={expenses} setEditedData={setEditedData}/>
    <EditPopUp editedData={editedData} setEditedData={setEditedData} expenses={expenses} setExpenses={setExpenses}/>
    <div className="table-container">
      <table onClick={()=>{
        if(contextPosition.left)
        {
          setContextPosition({
            left:'',
            top:''
          })
        }
      }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select name="" id="category-list" onChange={(e)=> setQuery(e.target.value)}>
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Cloths">Cloths</option>
                <option value="Bill">Bill</option>
                <option value="Medicine">Medicine</option>
                <option value="Education">Education</option>
              </select>
            </th>
            <th className="amount">
              Amount
              <span id="upDownArrow">
                <i className="fa-solid fa-arrow-up" title="Descending" onClick={()=>setSortCallBack(()=> (a,b)=>b.price-a.price)}></i>
                <i className="fa-solid fa-arrow-down" title="Ascending" onClick={()=>setSortCallBack(()=> (a,b)=>a.price-b.price)}></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            filterData.sort(sortCallBack).map(({id,title,category,price})=>{
              return <ExpenseList key={id} id={id} title={title} category={category} price={price} setContextPosition={setContextPosition}/>
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th></th>
            <th>
              <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
              <span>{total}</span>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  );
};

export default ExpenseTable;
