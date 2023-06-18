import axios from 'axios';
import { useEffect,useState , useCallback} from 'react';
import './App.css';
import MoveDetails from './MoveDetails';

function App() {
  const API = "http://test.api.boxigo.in/sample-data/"
  let [results,setResults] = useState([])

  const callApi = useCallback( async() => {
    var res =await axios.get(`${API}`)
    if(res.status === 200 ){
      setResults(res.data.Customer_Estimate_Flow)
      // console.log(res.data.Customer_Estimate_Flow[0])
      // console.log(res.data.Customer_Estimate_Flow[0].items.inventory)
    }
  },[])
  useEffect(() => {
    callApi()
    },[callApi])

  return (
    <div className="App">
      {results.map((result,index) => {
        return(
          <MoveDetails result={result} key={index} /> 
        )
      })} 
    </div>
  );
}

export default App;
