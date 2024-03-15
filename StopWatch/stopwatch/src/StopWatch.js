import { useState } from "react"




export default function Stopwatch(){
    let [hour,setData] = useState(0);
    let [buttonText,setDataButton] = useState("Start");
  
    function Button(){
        return (
            <div>
                <button onClick={()=>{UpdateData()}}>{buttonText}</button>
            </div>
        )
    }
   
    function UpdateData(){
    var k = setInterval(() => {
         setData(
                hour++
        )
        }, 1000);
        if(buttonText == "Start"){
            setDataButton(
                    buttonText = "stop");
             
            }else{
                setDataButton(
                    buttonText = "Start");
                    clearInterval(k);

            }
    }

    
    return (
        <div>
            <h1>{hour}</h1>
            <br></br>
            <Button/>
        </div>
    )
}