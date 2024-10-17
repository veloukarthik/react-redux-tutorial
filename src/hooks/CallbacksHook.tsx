import React,{useCallback,useState} from "react";

function CallbacksHooks() {

    const [count,setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount(count+1);
    },[count])

    return ( <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
    </div> );
}

export default CallbacksHooks;