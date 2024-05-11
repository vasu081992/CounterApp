import React from "react"
import { useState } from "react"

const Button =({name,onClick})=>{

    return (

        <>
        
        <button onClick={onClick}>{name}</button>

        </>
    )
}



const Counter = () =>{

    const [count,setcount] = useState(0)


    const handleIncrement = ()=>{
  
         setcount((prev)=>prev+1)


    }


    const handleDecrement = ()=>{

        setcount((prev)=>{
            return prev-1;
         })

    }


    return (

        <div>

        <h1> Counter App</h1>

        <h5>{count}</h5>
       
        <Button name={"Increment"} onClick={handleIncrement}/>

        <Button name={"Decrement"} onClick={handleDecrement}/>

        </div>

    )
}

export default Counter