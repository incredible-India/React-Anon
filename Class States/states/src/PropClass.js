import React from "react";

export default class User extends React.Component {


    render() {
        return (

            <div>
                <h3>Props With Class </h3>
                <h1>the name is  {this.props.name}</h1>
            </div>
        )
    }
}