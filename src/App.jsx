import { useState } from "react";
import Allcards from "./component/AllCards.jsx"
import {data} from "./utilis/data.js"

function App() {

const [val, setVal] = useState('');
const [filterData ,setFilterData] = useState(data);

  function filterHandler() {
    let res = filterData.filter((item) => item.title.toLowerCase().includes( val.toLowerCase()))
    setFilterData(res)
  }
return (
    <div>
      <h1>Raste ka maal saste mai</h1>
      <div>
        <input type="text" placeholder="kya chahiye ?..." 
        onChange={function(e) { setVal(e.target.value);
          
        }}/>
        <button onClick={filterHandler}>Search</button>
      </div>
      <Allcards data={filterData}/>


    </div>
)
}

export default App;
