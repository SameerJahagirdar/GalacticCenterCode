import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import { useState,useEffect } from 'react';
import Alert from './Components/Alert';
function formatDate (input) {
  var datePart = input.match(/\d+/g),
  year = datePart[0],
  month = datePart[1], day = datePart[2];
  return month+'/'+day+'/'+year;
}

function App(props) {
  const[date,setDate] = useState('2022-01-02')
  const[startdate,setStartdate] = useState('2022-01-01')
  const[enddate,setEnddate] = useState('2022-01-08')
  const[alert,setAlert] = useState(null)
  
  const[data,setData] = useState({
    near_earth_objects : [[]]
  })
  const handlechange=((event)=>{
    setDate(event.target.value)
  })
  const handlechangestart=((event)=>{
    setStartdate(event.target.value)
  })
  const handlechangeend=((event)=>{
    setEnddate(event.target.value)
  })
  const clicking=(()=>{
    console.log('refreshed')
  })
  const showAlert =((mesg)=>{
    setAlert({
      alert : mesg,
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  })
  useEffect(() => {
    const diffTime = Math.abs(new Date(formatDate(enddate)) - new Date(formatDate(startdate)));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if(diffDays<=7){
    const fetchData = async () => {

      const url = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startdate}&end_date=${enddate}&api_key=DE58jiPEBuIu18w7V7womGLZmutGbGzGvbFoKgmq`);

      const info = await url.json();
      setData(info);
    }
    fetchData()
    .catch(console.error);
  }else{
    showAlert();
  }
  }, [enddate,startdate])
  return (
    <>
    <Alert alert={alert}/>
    <Navbar/>
    <div className='container'><h1><center>Near Earth Objects</center></h1></div>
    <div className='d-inline'>
    <center>
    <span className='container mx-10 my-5' style={{ width: "22rem" }}><strong>Pick a date = </strong><input type="date" value={date} onChange={handlechange} /></span>
    <span className='container mx-10'><strong>Start date = </strong><input type="date" value={startdate} onChange={handlechangestart} /></span>
    <span className='container mx-10'><strong>End date = </strong><input type="date" value={enddate} onChange={handlechangeend}  /></span>
    <button type="button" className="btn btn-secondary" onClick={clicking}>SHOW</button>
    </center></div>
    <Cards data={data} date={date}/>
    </>
  );
}

export default App;
