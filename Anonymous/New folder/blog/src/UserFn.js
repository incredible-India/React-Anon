function Button(){
    const blr = ()=>{console.log("Hello");}

    return <button onClick={()=>blr()}>This is</button>
}
export default function User(){
return (<div><h1>Hello press this button <Button/> </h1></div>)
}