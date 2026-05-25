import { useState , useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[number, setNumber] = useState(false);
  const[character,setcharacter]= useState(false)
  const[password,setpassword]=useState("")

  // ref hook
  const passwordRef = useRef(null)

 const passwordGenerator = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(number) str +="0123456789"
  if(character) str +="!@#$%^&*_+=[]{}~`"

for(let i=1;i<= length;i++){
  let char = Math.floor(Math.random()* str.length+1)

  pass += str.charAt(char)

  
}
setpassword(pass)
  
 },[length,number,character]);

 const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)
 },[password])


 useEffect(()=>{
  passwordGenerator()
},[length,number,character,setpassword])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
   <h1 className='text-white text-center'>Password Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
      <input 
      type="text"
      value={password}
      className='w-full py-1 px-3 outline-none'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button 
        onClick={copyPasswordToClipboard }
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
        copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label >Lenth:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <input 
         type="checkbox"
        defaultChecked={number}
        id='numberInput'
        className='cursor-pointer'
        onChange={()=>{setNumber((prev)=>!prev)

        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <input 
         type="checkbox"
        defaultChecked={character}
        id='characterInput'
        className='cursor-pointer'
        onChange={()=>{setcharacter((prev)=>!prev)

        }}
        />
        <label htmlFor='numberInput'>characters</label>
        </div>
        </div>

   </div>
    </>
  )
}

export default App
