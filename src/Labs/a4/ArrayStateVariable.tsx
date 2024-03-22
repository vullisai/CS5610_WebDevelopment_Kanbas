import React,{useState} from "react";
function ArrayStateVariable(){
    const[array, setArray]=useState([1,2,3,4]);
    const addElement=()=>{
        setArray([...array,Math.random()*100]);
    }
    const deleteElement=(index: number)=>{
        setArray(array.filter((item, i)=>i!==index));
    }
    return(
        <div>
            <h2>Array State Variable</h2>
            <button onClick={addElement}>AddElement</button>
            <ul>
                {array.map((item, index)=>(
                    <li>
                        {item}
                        <button onClick={()=>deleteElement(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ArrayStateVariable;