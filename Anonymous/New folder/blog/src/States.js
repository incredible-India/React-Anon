import React from 'react';
import { useState } from 'react';




const MyButton = () => {
    const [data,stData] = useState("himasnu")
    function oncliHellock(){
        stData("Himanshi")
  
    }
  return (
   <div>
    <h1>{data}</h1>
     <button onClick={()=>oncliHellock()}>{data}</button>
   </div>
  );
};

export default MyButton;