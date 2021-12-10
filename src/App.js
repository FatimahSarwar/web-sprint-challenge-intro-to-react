import React , {useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarCharacter from './components/Character'
import styled from 'styled-components';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character , setCharacter] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(()=>{
  axios.get(`https://swapi.dev/api/people`)
  .then(response =>{
    console.log(response.data);
    setCharacter(response.data)
  })
},[])
const StarStyle = styled.div`
margin: 0, auto;
background-color: 'lightrey';
`

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarStyle>
{
  character.map((character,index)=>{
return <StarCharacter key = {index} info = {character} />
  })
}
  
</StarStyle>
    </div>
  );
}
// console.log(`https://swapi.dev/api/people`)
export default App;
