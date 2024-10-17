import React,{useMemo,useState} from "react";

function Memos() {
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState(['todo 1','todo 2']);
    const calculation = useMemo(()=>{
        return expensiveCalculation(count);
    },[count])
    return ( <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>Expensive Calculation</h2>
        <p>{calculation}</p>
    </div> );
}

function expensiveCalculation(num:any) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  }


export default Memos;