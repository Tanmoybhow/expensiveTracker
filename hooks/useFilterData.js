import { useState } from "react"

export const useFilterData = (data,callBack) => {
    const [query,setQuery] = useState('')
    const filterData = data.filter((el)=>{
        return callBack(el).toLowerCase().includes(query.toLowerCase());
    });
    // console.log(filterData)
    return [filterData,setQuery];

}


