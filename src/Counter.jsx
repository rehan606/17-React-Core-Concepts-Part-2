import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleDecress = ()=>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return(
        <div style={{border: '2px solid tomato', marginTop: '10px', padding: '10px'}}>
            <h3>Couter: {count} </h3>
            <button style={{marginRight: '20px'}} onClick={handleDecress}> - </button>
            <button onClick={handleClick}> + </button>
        </div>
    )
}


