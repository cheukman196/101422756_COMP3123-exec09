import { Component } from "react";

export default class College extends Component{
    constructor(props){
        super(props);
        this.state = {
            college: props.college || 'George Brown College',
            city: props.city || 'Toronto'
        };
    }

    render() {
        return (
            <div>{this.state.college}, {this.state.city}</div>
        )
    }
}