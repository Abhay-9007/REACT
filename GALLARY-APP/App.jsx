import {useEffect, useState} from "react"
import axios from "axios"

function App() {
  // console.log("Hello")

  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)

  const loadData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const loadData = async ()  => {
  //   async function fetchData() {
  //     const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`)
  //     setData(responce.data)
  //   fetchData()
  //     // console.log(data)
  //   // console.log(data)
  //   }
  // }

  // useEffect(async () => {
  //   await loadData()
  // }, [index])}
  useEffect(() => { loadData() }, [index])

  

  return <>
        <h1 className="text-4xl  font-bold text-center">
            Gallery App
        </h1>
        {/* <h1 className="text-3xl  font-bold text-center">
            if(data === []){
                <h1>Refresh...</h1>
            }
            else{
              <h1>display:none</h1>
            }
        </h1> */}
        {/* <button onClick={() => {loadData()}}> Load Data </button> */}
        <div className="flex flex-wrap">
          {
            data.map((item) => {
              return <div className="w-1/4 p-4">
                <img className="w-full h-48 overflow-hidden object-cover cursor-pointer" 
                // onClick={() => window.location.href(item.url)}
                onClick={() => window.open(item.url, "_blank")}
                src={item.download_url} 
                alt={item.author} 
                key={item.id}
                width="200"
                
                />
                <p className="text-center"> {item.author} </p>
              </div>
            })
          }
        </div>
        <div className="flex gap-10 justify-center">
          <button className="bg-yellow-400 text-white px-10 p-5 m-10 rounded"
            onClick={() => {
              if(index > 1){
                setIndex(index - 1)
              }
            }}
            >
            Prev
          </button>
          
          <p className="text-4xl px-10 p-5 m-10">{index}</p>

          <button className="bg-yellow-400 text-white px-10 p-5 m-10 rounded"
            onClick={() => {
              setIndex(index + 1)
            }}
            >
            Next
            </button>
          
        </div>
      </>
}

export default App
