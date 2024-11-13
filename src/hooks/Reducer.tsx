import React,{useReducer} from 'react'

const initialState = { count: 0 };

function reducerTest(state:any, action:any) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducerTest, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

export default Reducer;

