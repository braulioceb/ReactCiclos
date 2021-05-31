import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const animalImages = {
    marsopa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Porpoise_touching.jpg/230px-Porpoise_touching.jpg",
    delphin: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/250px-Tursiops_truncatus_01.jpg",
    narval: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Narwal.jpg/250px-Narwal.jpg"
}

const animals = Object.keys(animalImages);

class AnimalsImage extends Component{
    state = {src: animalImages[this.props.animal]}
    
    componentWillReceiveProps(nextProps){
        this.setState({src: animalImages[nextProps.animal]});
    }

    shouldComponentUpdate(nextProps){
        return nextProps.animal !== this.props.animal 
    }

    componentWillUpdate(nextProps, nextState){
        const img = document.querySelector("img")
        console.log(nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState){
        const img = document.querySelector("img");
        console.log(nextProps, nextState)
    }

    render(){
        return (
            <div> 
                <p> Selected {this.props.animal}</p>
                <img src = {this.state.src} />
            </div>
        )
    }
}

AnimalsImage.propTypes = {
    animal: PropTypes.oneOf(animals)
};

class ComponentUpdate extends Component{
    state =  {animal: "delphin"}
    _renderAnimalButton = (animal)=>{
        return (
            <button 
            key ={animal} 
            onClick={() => this.setState({animal}) }
            >
                {animal}
            </button>
        )

    }

    render(){
        return (
            <div>
                {animals.map(this._renderAnimalButton)}
                <AnimalsImage animal = {this.state.animal} />
            </div>
        )
    }
}

export default ComponentUpdate