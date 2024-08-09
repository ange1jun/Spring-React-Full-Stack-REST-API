import { useState } from "react";
import './Counter.css'
import CounterButton from "./CounterButton";

function Counter() {

    const [count, setCount] = useState(0)

    function incrementCountParentFunction(by){
        setCount(count + by)
    }

    function decrementCountParentFunction(by){
        setCount(count - by)
    }

    function resetCounter() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
                <CounterButton by={1} 
                    incrementMethod={incrementCountParentFunction}
                    decrementMethod={decrementCountParentFunction}/>
                <CounterButton by={2} 
                    incrementMethod={incrementCountParentFunction}
                    decrementMethod={decrementCountParentFunction}/>
                <CounterButton by={5} 
                    incrementMethod={incrementCountParentFunction}
                    decrementMethod={decrementCountParentFunction}/>
                <button className="resetButton"
                        onClick={resetCounter}
                        >Reset</button>
        </>
    )
}

export default Counter;