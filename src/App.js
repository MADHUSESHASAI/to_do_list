import React, {useState,useRef,useEffect} from 'react'
import './App.css'
import { MdDeleteOutline } from "react-icons/md";


function App() {
  
  
  let name=useRef('')
  const [info, setArtists] = useState([]);


  useEffect(()=>
  {
    console.log(new Date().toLocaleDateString())
    name.current.focus();
  }
  ,[]) 

  return (
    <>
    <div id='heading'>
      To Do List
    </div>
    <div id='main'>
      <div id='date'>Date:<span>{new Date().toLocaleDateString()}</span></div>
      <div id='container'>
        <div id='input'>
        <input
        ref={name}
      
      />
      <button onClick={() => {name.current.value.length===0?setArtists([...info]):
        setArtists([...info,{value: name.current.value}])}}>Add</button>
        </div>
        <div id='box'>


          {info.map((data,index)=>
          <div id='items'>


          <div id='name'>
            {data.value}
          </div>
          
          <div id='delete'>
            <button onClick={()=>{info.splice(index,1)
    setArtists([...info])}}>
          <MdDeleteOutline />
          </button>
          </div>

          </div>
        )}
          
        </div>
      </div>
    </div>
    </>
  )

}

export default App
