const useCamelCase = (data)=>{
    let firstChar = data[0].toUpperCase();
    let remainChar = data.substring(1).toLowerCase();
    return firstChar+remainChar;
  }
  export default useCamelCase;