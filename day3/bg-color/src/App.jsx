
import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setcolor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className='flex flex-wrap justify-center shadow-lg gap-2 bg-white px-3 py-3 rounded-2xl'>
             <button
             onClick={()=>setcolor("red")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"red"}}
             >Red</button>
               <button
              onClick={()=>setcolor("green")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"green"}}
             >green</button>
               <button
               onClick={()=>setcolor("blue")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"blue"}}
             >blue</button>
               <button
               onClick={()=>setcolor("yellow")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"yellow"}}
             >yellow</button>
               <button
               onClick={()=>setcolor("olive")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"olive"}}
             >olive</button>
               <button
               onClick={()=>setcolor("gray")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"gray"}}
             >gray</button>
               <button
               onClick={()=>setcolor("pink")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"pink"}}
             >pink</button>
               <button
               onClick={()=>setcolor("purple")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor:"purple"}}
             >purple</button>
             <button
               onClick={()=>setcolor("lavender")}
             className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
             style={{backgroundColor:"lavender"}}
             >lavender</button>
             <button
               onClick={()=>setcolor("white")}
             className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
             style={{backgroundColor:"white"}}
             >white</button>
             <button
               onClick={()=>setcolor("black")}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'
             //style={{backgroundColor:"black"}}
             >black</button>
        </div>
        </div>
      
      </div>
    </>
  )
}

export default App
