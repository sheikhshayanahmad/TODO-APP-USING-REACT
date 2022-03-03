import React ,{useState} from 'react'
import './App.css';


function Clock ()  {
  return (
    
    function Clock() {
      let time = new Date().toLocaleTimeString();
      const [ctime, setCtime] = useState(time);
      const UpdateTime = () => {
         time = new Date().toLocaleTimeString();
        setCtime(time);
      };
    
      setInterval(UpdateTime,1000)
      return (
        <div className="App">
         <h1>{ctime} </h1>
         <button onClick ={UpdateTime}> Get time </button>
        </div>
      );
    }
    
    
  )
}
export default Clock;
