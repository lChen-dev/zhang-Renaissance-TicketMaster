import './App.css';
import DiscoGlobe from './DiscoGlobe';
import axios from 'axios';
import { useEffect,useState } from 'react';
import BarLoader from 'react-spinners/BarLoader'
import TICKET_MASTER_API_KEY from './secrets';

const apiLink = `https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ9175rX7&size=100&apikey=${TICKET_MASTER_API_KEY}`

function App() {
const [loading,setLoading] = useState(true);
const [locationsObject,setLocations] = useState({
  page: {number:0,size:0,totalElements:0,totalPages:0},
  _embedded: {
    events:[{
    accessability: {ticketLimit:0},
    priceRanges: [{
      currency: '',
      min: 0,
      max: 0,
      type: ''
    }],
    _embedded: {venues: 
      [{
        location: 
        {latitude:'',longitude:''},
        name: '',
        country: {
          name: ''
        },
        city: {
          name: ''
        },
        state: {
          name: ''
        }
      }]
    }
  }]}
});

useEffect(() => {
  setLoading(true);
  axios.get(apiLink)
  .then((data) => {
    setLocations(data.data)
  })
  .catch(e => {
    console.log(e)
  })
  setLoading(false);
},[]);

  return (
    <div className="App">
      { loading ? (
          <BarLoader size = {30} color={'#F37A24'} loading={loading}/>
        ) : (       
          <div>
      <div className='beyforeground'>
        <img src = {require('./media/beytrans.png')}/> 
        </div>
          <DiscoGlobe locationObj = {locationsObject}/>
          </div>
          )
      }
    </div>
  );
}

export default App;
