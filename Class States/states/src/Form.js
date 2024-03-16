import React, { useState } from "react";
export default function MyForm(){
const [name,setName] = useState("")
const [fev,setfev] = useState("")
const [inc,setinc] = useState(false)    
const [data,setdata] = useState(3)
function GetFormData(e){
    e.preventDefault();
    console.log(name,fev,inc);
}

    return (
        <form onSubmit={(e)=>
            GetFormData(e)
        }>
<input type="text" onChange={(e)=>setName(e.target.value)}></input>
<select onChange={(e)=>setfev(e.target.value)}>
    <option>Car</option>
    <option>Bike</option>
    <option>Rocket</option>
</select>

<input type="checkbox" onChange={(e)=>setinc(e.target.checked)} ></input>

<button type='submit' >Submit</button>
<button type="reset">Clear</button>




<div>
    {
        data==1?<h1>data is one</h1>:data==2?<h2>data is two</h2>:<h3>Data us other</h3>
    }
</div>
        </form>
    );
}