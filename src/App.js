import './common.css'

function App() {

  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {

    var timeCount = null;

    if(timeOn){
      timeCount = setInterval(() => {
        setTime = setTime + 10;
      }, 10);
    }else{
      clearInterval (timeCount);
    }

    
  }, [timeOn]);


  return (
    <div className="App">
      

    </div>
  );
}

export default App;
