
import './App.css'
import { useEffect, useState } from 'react'  

function App() {
const[count,setcount]= useState(0);

const incrcount=()=>{
  setcount(count + 1);//simple to increse one count 
  setcount(count + 1);
  setcount(count + 1);
  setcount(count + 1);
  // setcount(prevcount => prevcount + 1); // asked in the interview to increase value multiple times
  // setcount(prevcount => prevcount + 1);
  // setcount(prevcount => prevcount + 1);
  // setcount(prevcount => prevcount + 1);

}
 const decrese=()=>{
  setcount(count-1)
 }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
     <button onClick={incrcount}>incrcount {count}</button>
      <button onClick={ decrese}>deccount {count}</button>
    </>
  )
}

export default App