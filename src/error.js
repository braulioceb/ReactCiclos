import React, { Component } from 'react'

class ButtonError extends Component{
    state = {throwError: false}
    render(){
        if(this.state.throwError){
            throw new Error('Un Error al usar el botón error') 
        }

        return (
            <button
            onClick ={()=>this.setState({throwError: true})}>
                Launch Error
            </button>
        )
    }

} 

class ComponentError extends Component{
    state = {hasError: false, errorMsg:""}

    componentDidCatch(error, errorinfo){
        this.setState({hasError:true, errorMsg: error.toString()})
    }

    render(){
        if (this.state.hasError){
            return(
                <div>
                    <p>  {this.state.errorMsg} </p>
                    <button
                    onClick = {()=> this.setState({hasError: false})}>
                        Return to App
                    </button>
                </div>
            )
        }
        return (
            <div> <ButtonError /> </div>
           
        )
    
    }
}

export default ComponentError