import { useState } from "react";

export default function Login(){
    
const [username,setUserName] = useState("");
const [userpassword,setUserpassword] = useState("");
const [userErr,setUserErr] = useState(false);
const [passwordErr,setpasswordErr] = useState(false);

    function hasFormSubmit(e){
        e.preventDefault();
console.log(username,userpassword);
        if(username == "" || userpassword == ""){
            setUserErr(true);
            setpasswordErr(true);
        }
    }

    function usernameHandler(e){
        let item = e.target.value;
        if(item.length <3){
            setUserErr(true);
        }else{
            setUserErr(false);
            setUserName(item);
        }
    }

    function userPasswordHandler(e){
        let item = e.target.value;
        if(item.length <3){
            setpasswordErr(true);
        }else{
            setpasswordErr(false);
            setUserpassword(item);
        }
    }

    return (
        <div>
    <form onSubmit={(e)=>{hasFormSubmit(e)}}>
    <label htmlFor="username" >
                Username
            </label>
            <br></br>
            <input type="text" name="username" id="username" placeholder="username" onChange={(e)=>usernameHandler(e)}></input> 
            {
                userErr?<span>Invalid Username </span>:null
            }

            <br></br>

            <label htmlFor="pass">
                Password
            </label>
            <br></br>
            <input type="password" name="username" id="pass" placeholder="username" onChange={(e)=>userPasswordHandler(e)}></input>
            {
                passwordErr?<span>Invalid password </span>:null
            }
             <br></br>

            <button type="submit">Login</button>
    </form>
        </div>
    )
}