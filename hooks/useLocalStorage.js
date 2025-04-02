import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

 useEffect(()=>{
    const existLocalData = JSON.parse(localStorage.getItem(key));
    if (existLocalData) {
      setData(existLocalData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
 },[])

  const updateLocalStorage = (newData) => {
    if(typeof newData==='function'){
    localStorage.setItem(key, JSON.stringify(newData(data)));
    }else{
        localStorage.setItem(key, JSON.stringify(newData));

    }
    // debugger
    setData(newData);
  };

  return [data, updateLocalStorage];
}
