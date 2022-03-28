import React ,{ useContext } from "react";
import { userName } from "./wrapper";

const Form = (props) => {
    const {user,setUSer } = useContext(userName)


    const handleName = (e) => {
        setUSer(e.target.value)
    }


    return(
        <form>
            <label>Your Name:</label>
            <input type='text' onChange= {handleName}/>
        </form>
    )
}

export default Form