

function Card(props){
    return <>
        <div className="bg-white p-5 text-black text-2xl m-10">
            <h1 className="text-5xl">{props.title}</h1>
            <p>{props.value}</p>
        </div>
    </>
}

export default Card
