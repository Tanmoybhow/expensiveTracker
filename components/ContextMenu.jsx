import React from 'react'

const ContextMenu = ({contextPosition,setExpenses,setContextPosition,expenses,setEditedData}) => {
  if(!contextPosition.left) return
  function deleteData(){
    console.log(contextPosition.id)
    setExpenses((prevState)=> prevState.filter((expense)=> expense.id != contextPosition.id));
    setContextPosition({
        left:'',
        top:''
    })
  }
  function editData(){
    console.log(contextPosition.id)
    let findData = expenses.find((expense)=>expense.id===contextPosition.id);
    setEditedData({
        id:findData.id,
        title:findData.title,
        category:findData.category,
        price:findData.price
    })
    setContextPosition({
        left:'',
        top:''
    })
  }
  return (
    <div className='context-menu' style={{left:contextPosition.left+3,top:contextPosition.top+3}}>
        <div onClick={editData}>Edit</div>
        <div onClick={deleteData}>Delete</div>
    </div>
  )
}

export default ContextMenu
