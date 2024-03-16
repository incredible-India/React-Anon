import logo from './logo.svg';
import './App.css';
import Test from './UserStates';
import Student from './Props';
import User from './PropClass';
import { useState } from 'react';
import HideAndShow from './HideShowToggele';
import MyForm from './Form';
function App() {
  const [name,changeName] = useState("Himanshu")
  const [InputData,showdatas] = useState()
  function UpdateName(){
    changeName("Sharma")
  }

  function showdata(val){
    console.log(val.target.value);
    showdatas(val.target.value)
  }
  return (
    <div className="App">
     <h2>Welcome to State and Props</h2>
     <Test/>
<h1>Welocme to Props</h1>
     <Student name={[1,2,3,4,5]} email="himanshu399231@gmail.com" data={{name:"Sumir",class:"Six"}}></Student>
<hr></hr>
     <User name={name}/>
    <button onClick={()=>{UpdateName()}}>Chnage Name</button>


    <hr>
    </hr>
    <h3>Imput Box Data</h3>
    <p>{InputData}</p>
    <input type="text" onChange={showdata}></input>
    <hr></hr>

    <h1>Hide and Show Toggle</h1>
    <HideAndShow/>

    <hr>
    </hr>
    <h1>Form Data</h1>
    <MyForm/>
    </div>
    
  );
}

export default App;
