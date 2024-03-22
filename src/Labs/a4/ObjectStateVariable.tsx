import React, {useState} from "react";
function ObjectStateVariable(){
    const[person,setPerson]=useState({name:"peter",age:"56"});
    return (
        <div>
            <h2>Object State Variable</h2>
            <pre>{JSON.stringify(person,null,2)}</pre>
            <input value={person.name} onChange={(e)=>setPerson({...person, name:e.target.value})}/>
            <br/>
            <input value={person.age} onChange={(e)=>setPerson({...person, age:e.target.value})}/>
        </div>
    );
}
export default ObjectStateVariable;