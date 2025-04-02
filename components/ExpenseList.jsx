import React from "react";

const ExpenseList = ({title,id,category,price,setContextPosition}) => {
  return (
    <tr onContextMenu={(e)=>{
      e.preventDefault()
      console.log(e.target.parentElement.id)
      setContextPosition({
        left:e.clientX,
        top:e.clientY,
        id:e.target.parentElement.id
      })
    }} id={id}>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <i className="fa-solid fa-indian-rupee-sign"></i><span>{price}</span>
      </td>
    </tr>
  );
};

export default ExpenseList;
