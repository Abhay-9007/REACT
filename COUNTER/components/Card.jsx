import React, { useState } from "react"

function Card() {
    const [val, setVal] = useState(0)
    function inc(){
        setVal(100)
        console.log(val)
    }
    function dec(){
        setVal(0)
        console.log(val)
    }

    return <>
        <h1>Amount : {val}</h1>
        <button onClick={() => setVal(val+1)}>+1</button>
        <button onClick={() => setVal(val - 1)}>-1</button>
    </>
}

export default Card
