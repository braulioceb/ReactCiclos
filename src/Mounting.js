import React, {Component} from 'react'
import ComponentUpdate from './update';

class Constructor extends Component{
    constructor(props){
        super(props)
        this.state = {initMsg: "Mensaje inicial"}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({initMsg: "changed message"})
    }

    componentWillMount(){
        this.setState({initMsg: "other message"})
    }

    render(){
        return(
            <div>
                <p> {this.state.initMsg} </p>
                <button onClick = {this.handleClick}>
                    Change Message
                </button>
            </div>
        )
    }
}

export default Constructor