import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <div className="nav">
                <h2>Abhay's Dome</h2>
                <div className="side">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    {/* <p>Home</p> 
                    <p>About</p>
                    <p>Contact</p> */}
                </div>
            </div>
        </>
    )

}

export default Navbar
