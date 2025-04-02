import React from 'react'

const Select = ({label,id,name,value,onChange,error,defaultOption,options}) => {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="" hidden>
        {defaultOption}
      </option>
      {options.map((option)=> <option key={option} value={option} >{option}</option>)}
    </select>
    <p className="error">{error}</p>
  </div>
  )
}

export default Select
