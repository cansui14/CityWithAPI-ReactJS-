import React, {useState , useContext} from 'react'
import CityContext from '../context/CityContext'
import { useNavigate } from 'react-router-dom'


function CreateCity() {
  const navigate = useNavigate();
  const {city, updateCity} = useContext(CityContext);

  const [name, setName] = useState(city.name)
  const [region, setRegion] = useState(city.region)
  const [code, setCode] = useState(city.code)
  

  const changeName = (event) => {
      setName(event.target.value);
  }
  const changeRegion = (event) => {
      setRegion(event.target.value);
  }
  const changeCode = (event) => {
      setCode(event.target.value);
  }
  
  const cityUpdate = (event) => {
      event.preventDefault(); 
      const updatedCity={
        id:city.id, name ,region, code
      }
      updateCity(updatedCity)
      navigate('/cities')
  }
  return (
      <div className='col-md-4 m-auto'>
          <h4>Update City</h4>
          <form>
              <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" value={name} className="form-control" onChange={changeName} />
              </div>
              <div className="form-group">
                  <label className="form-label">Region</label>
                  <input type="text" value={region} className="form-control"  onChange={changeRegion}/>
              </div>
              <div className="form-group">
                  <label className="form-label">Code</label>
                  <input type="text" value={code} className="form-control"  onChange={changeCode}/>
              </div>
              
              <div className="form-group mt-3">
                  <button onClick={cityUpdate} type="submit" className="btn btn-primary form-control" >Save</button>
              </div>
          </form>
          
          
     </div>
  );
}

export default CreateCity