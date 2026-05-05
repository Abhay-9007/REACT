import Text from './nav_comp/text.jsx'

function Navbar(){
    return <>
    <div className = "bg-gray-300 flex justify-between">
        <div className="m-3 text-5xl">Abhay.in</div>
        <div className = "p-3  flex items-baseline">
            <Text text="Home" />
            <Text text="Project" />
            <Text text="About" />
            <Text text="contact" />
        </div>
    </div>
    </>
}

export default Navbar;
