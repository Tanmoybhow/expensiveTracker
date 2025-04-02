import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import useCamelCase from "../hooks/useCamelCase";
const EditPopUp = ({ editedData,setEditedData ,expenses,setExpenses}) => {
  if (!editedData.id) return;
  const [error, setError] = useState({});
  const validate = (data) => {
    const errorData = {};
    if (!data.title) {
      errorData.title = "Please enter title.";
    } else if(data.title.length<3){
      errorData.title = "Title should be at least 3 characters long."
    }
    if (!data.category) {
      errorData.category = "Please enter category.";
    } 
    if (!data.price) {
      errorData.price = "Please enter price.";
    }else if(isNaN(data.price) || Number(data.price)<=0){
      errorData.price = "Price must be a positive number."
    }
    setError(errorData);
    return errorData;
  };

  const inputValueFetch = (e) => {
    const {name,value} = e.target;
    setEditedData((prev) => ({ ...prev, [name]: name==='title' && value!=""?useCamelCase(value):value }));
  };
  function addEditedData(e){
     e.preventDefault();
     const errorObj = validate(editedData);
     if(Object.keys(errorObj).length>0) return;
     const updatedExpenses = expenses.map((expense)=> expense.id===editedData.id? editedData:expense);
     setExpenses(updatedExpenses)
     console.log(updatedExpenses) 
     setEditedData(
        {
            id:"",
            title:"",
            category:"",
            price:""
          }
     )
  }
  return (
    <div className="form-container edit-popup">
      <form onSubmit={addEditedData}>
        <Input label="Title" type="text" id="title" name="title" value={editedData.title}
          onChange={inputValueFetch} error={error.title}/>
        <Select
          label="Category"
          id="category"
          name="category"
          defaultOption="Select Category"
          value={editedData.category}
          onChange={inputValueFetch}
          options={["Grocery", "Cloths", "Bill", "Medicine", "Education"]} error={error.category}
        />
        <Input label="Amount" type="text" id="amount" name="price" value={editedData.price}
          onChange={inputValueFetch} error={error.price}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditPopUp;
