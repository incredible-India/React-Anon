import React from "react";
export default function HideAndShow(){
const [status,setStatus] = React.useState(true);

return (
    <div>
        {
            status?<h2>This is The text for Hode and SHow or Toggle</h2>:null
        }
        <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
)

}