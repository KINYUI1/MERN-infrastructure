import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service'

const NavBar = ({user, setUser})=>{
    const handleLogOut = ()=>{
        userService.logOut()
        setUser(null)
    }
    const {name} = user
    return <nav>
        <h2>Welcome, {name}</h2>
        <Link to='orders'>Order History</Link>
        &nbsp; | &nbsp;
        <Link to='orders/new'>New Order</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
}

export default NavBar;