import './Box.css';
import Box from './Box.js';

const Images = () => {
  return(
    <>
      <input type="file"></input>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box></Box>
        
      </header>
    </div>
  );
}

export default App;
