import { useState } from 'react'

function App() {

    const [name, setName] = useState("Guest");

    const function1 = (e) => {
        // setName("Abhay");
        setName(e.target.value);
        console.log(e.target.value)
    }

    return <>
        <h1 className="bg-black text-zinc-100">
            Learning 2-Way Data Binding.
        </h1>

        <h1 className="text-3xl font-bold underline">
            Hello {name ? name[0].toUpperCase() + name.slice(1) : "Guest"}
        </h1>
        

        <input 
            // onClick={() => { function1() }} 
            onChange={(e) => {function1(e)}}
            type="text" 
            value = {name}
            placeholder="Enter Your Name Here...">
        </input>

    </>
}

export default App

// tailwindcss is not working here

