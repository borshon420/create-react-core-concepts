import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];
  const cinemas = [
    
      {nayok: 'Rubel', nayika: 'Moushumi'},
      {nayok: 'BappaRaz', nayika: 'Cheka'},
      {nayok: 'Koober', nayika: 'Kopila'},
      {nayok: 'Joshim', nayika: 'Shuchorita'}

    
  ]
  return (
    <div className="App">
      
    <ul>
        {
        nayoks.map(nayok => <li>{nayok}</li>)
        }
    </ul>
    {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}


/* 
<Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person>
*/

/* 
<Friend number="01734" address="Noakhali"></Friend>
      <Friend number="01678" address="Rongpur"></Friend>
*/

/* 
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="Cheka"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
*/

function Person(props) {
  console.log(props)
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    borderRadius: '10px',
    margin: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of: {props.nayika}</h3>
    </div>
  ); 
}

function Friend(props) {
  return (
    <div className="Person">
      <h3>Phone: {props.number}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}

function Cinema(props){
  return (
    <div className="Person">
      <h2>Nayok: {props.nayok}</h2>
      <h5>Nayika: {props.nayika}</h5>
    </div>
  )
}

export default App;
