import React,{useState} from "react";
function StringStateVariables(){
    const[firstName, setFirstName]=useState("Jhon");
    return(
        <div>
            <h2>String State Variable</h2>
            <p>{firstName}</p>
            <input className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/> 
        </div>
    );
}
export default StringStateVariables;