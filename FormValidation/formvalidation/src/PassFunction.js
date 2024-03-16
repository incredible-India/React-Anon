export default function PassFunction(props){

    return (
        <div>
            <button onClick={()=>props.data()}>Click here to Execute</button>
        </div>
    )

}