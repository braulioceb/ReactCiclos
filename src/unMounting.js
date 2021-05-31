import React, {Component} from 'react'
import ComponentUpdate from './update';

class ComponentToUnmount extends Component{
    state = {windowWidth: 0}

    _updateStateWindowWidth = ()=> {
        this.setState({windowWidth : document.body.clientWidth});
    }

    componentDidMount (){
        this._updateStateWindowWidth();
        window.addEventListener('resize',
            this._updateStateWindowWidth
        )
    }

    componentWillUnmount(){
        window.removeEventListener(
            'resize',
            this._updateStateWindowWidth
        );
    }
    render (){
        return (
            <div>
                <p>ancho de pantalla:{this.state.windowWidth}</p>
            </div>
        )
    }
}

class ComponentUnmount extends Component{
    state = {mostrarComponente: true}
    render (){
        if (this.state.mostrarComponente){
            return (
                <div>
                    <ComponentToUnmount />
                    <button onClick ={() => this.setState({mostrarComponente:false})}>
                        Unmount Component
                    </button>
                </div>
            )
        }

        return (
            <button onClick = {()=> this.setState({mostrarComponente: true})}>
                Mount Component
            </button>
        )
    }
}

export default ComponentUnmount