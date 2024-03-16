import React,{Component} from "react";


export default class Test extends Component {

    constructor(){
        super();
        this.state = {data : "Himanshu"}
        this.updateName = this.updateName.bind(this);
    }


    updateName(){
        this.setState({data:"sharma"});
    }
render() {
   return   (
    <div>
         <h1>Hello From Class States </h1>
   <hr>
   </hr>
<h3>Name : {this.state.data}</h3>
<button onClick={this.updateName}>Update Name</button>
<hr></hr>
    </div>
   )

}
}