import { Link } from "react-router-dom";

function Header()
{
    return(
        <div>
            {/* <h1>Header</h1> */}
            <Link to='/'>HOME</Link>&nbsp;&nbsp;
            <Link to='/about'>ABOUT</Link>&nbsp;&nbsp;
            <Link to='/contact'>CONTACT</Link>&nbsp;&nbsp;
            <Link to='/login'>LOGIN</Link>&nbsp;&nbsp;
            
        </div>
    )
}
export default Header;