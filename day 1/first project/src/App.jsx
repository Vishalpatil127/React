import { useState } from "react"

function App() {

const[counter,setCounter]=useState(0)

// another method to update the counter
const remove=()=>{
  if(counter<=0){
  
    return 0 ;
  }
  setCounter(counter-1)
}


  return (
    <>
     <h1>hello this is vishal</h1>
    <button onClick={()=>setCounter(counter+1)}> incresecount {counter}</button>
    <button onClick={remove}>decrese count {counter}</button>
    </>
  
  )
}

export default App
