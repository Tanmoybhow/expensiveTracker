import React, { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import useCamelCase from "../hooks/useCamelCase";
const ExpenseForm = ({ setExpenses }) => {
  // const [title,setTitle] = useState('');
  // const [category,setCategory] = useState('');
  // const [price,setPrice] = useState('');
  let [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
  });
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
  const getFormData = (e) => {
    e.preventDefault();
    console.log(formData)
    const expense = { ...formData, id: crypto.randomUUID() };
    console.log(Object.keys(validate(expense)).length);
    console.log(expense);
    if (Object.keys(validate(expense)).length > 0) return;
    setExpenses((prevSate) => [...prevSate, expense]);
    setFormData({
      title: "",
      category: "",
      price: "",
    });
  };
  const inputValueFetch = (e) => {
    const {name,value} = e.target;
    setFormData((prev) => ({ ...prev, [name]: name==='title' && value!=""?useCamelCase(value):value }));
  };
  return (
    <div className="form-container">
      <form onSubmit={getFormData}>
        <Input
          label="Title"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={inputValueFetch}
          error={error.title}
        />
        <Select
          label='Category'
          id='category'
          name='category'
          value={formData.category}
          onChange={inputValueFetch}
          error={error.category}
          defaultOption="Select Category"
          options={['Grocery','Cloths','Bill','Medicine','Education']}
        />
        <Input
          label="Amount"
          type="text"
          id="amount"
          name="price"
          value={formData.price}
          onChange={inputValueFetch}
          error={error.price}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
