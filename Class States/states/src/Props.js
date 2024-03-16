export default function Student(props){


    return (
        <div>
            <h4>Hello : {props.name} and email is {props.email}</h4>
            <h5>Name : {props.data.name} class : {props.data.class}</h5>
        </div>
    )
}