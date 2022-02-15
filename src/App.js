import './common.css'
import { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {

    var timeCount = null;

    if(timeOn){
      timeCount = setInterval(() => {
        setTime( x => x + 10 );
      }, 10);
    }else{
      clearInterval (timeCount);
    }

    return () => clearInterval (timeCount);

    
  }, [timeOn]);


  return (
    <div className="App">
      <div className="stop-watch">
        <span>{time}</span>

    <br />
        <button onClick={ () => setTimeOn(true) }>start</button>
        <button onClick={ () => setTimeOn(false) }>stop</button>
        <button onClick={ () => setTimeOn(true) }>resume</button>
        <button onClick={ () => setTime(0) }>reset</button>
      </div>

    </div>
  );
}

export default App;
