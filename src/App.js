import logo from './logo.svg';
import './App.css';
import './styles.css'
import ComponentUpdate from './update'
import ComponentError from './error'
import ComponentUnmount from './unMounting'
import Constructor from './Mounting'


function Title(props){
  return (
    <h1 className = "title"> {props.title}  </h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title = {"ciclo update"}/>
        <ComponentUpdate/>
        <Title title = {"ciclo error"}/>
        <ComponentError/>
        <Title title= {"Unmounting"}/>
        <ComponentUnmount />
        <Title title= {"Ciclo Mounting"}/>
        <Constructor/>
      </header>
    </div>
  );
}

export default App;
