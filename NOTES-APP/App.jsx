import Heading from './component/Heading.jsx'
import Card from './component/Card.jsx'
import {useState} from 'react'

function App() {

  const [title, setTitle] = useState("")
  function funcTitle(e){
    // console.log(e.target.value)
    setTitle(e.target.value)
  }

  const [value, setValue] = useState("")
  function funcValue(e){
    // console.log(e.target.value)
    setValue(e.target.value)
  }

  const [notes, setNotes] = useState([])  

  function submit(){
    // console.log(title, value)
    notes.push({title, value})
    setValue("")
    setTitle("")
    console.log(notes)
  }


  return (
    <>
      <Heading text="Add Notes"/>
      <div className="flex justify-center h-100 w-100% mb-10">
        <div className=" p-5 h-full w-1/2">
          <input className='border-3 border-white h-15 w-full text-white text-2xl'
            onChange={(e) => {funcTitle(e)}}
            placeholder='Enter Title Here'
            type='text'
            value={title}>
          </input>

          <br/>

          <textarea className='border-3 border-white h-60 w-full mt-5 text-white text-2xl'
            onChange={(e) => {funcValue(e)}}
            type='text'
            placeholder='Enter Text here..'
            value={value}>
          </textarea>

          <button className='ml-72 mt-5 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded'
            onClick={() => {submit()}}>
            Save
          </button>
        </div>
      </div>

      <Heading text="All Notes"/>

      <div className="flex overflow-x-scroll ">
        {notes.map((note) => {
          return <Card title={note.title} value={note.value}/>
        })}

      </div>
      
    </>
  )
}

export default App
