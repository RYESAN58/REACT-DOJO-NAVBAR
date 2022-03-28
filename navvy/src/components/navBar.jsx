import React ,{ useContext } from "react";
import { userName } from "./wrapper";

const NavBar = (props) => {
    const {user,setUSer } = useContext(userName)
    const style = {
        backgroundColor: 'Purple',
        width: '100%',
        height: '100px',
    }
    return(
        <div style={style}>
            <h1> Hi {user}</h1>
        </div>
    )
}
export default NavBar