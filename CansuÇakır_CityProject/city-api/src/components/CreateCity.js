import React, {useState , useContext} from 'react'
import CityContext from '../context/CityContext'
import { useNavigate } from 'react-router-dom'


function CreateCity() {
  const navigate = useNavigate();
  const {postCity} = useContext(CityContext);

  const [name, setName] = useState("")
  const [region, setRegion] = useState("")
  const [code, setCode] = useState(0)
  

  const changeName = (event) => {
      setName(event.target.value);
  }
  const changeRegion = (event) => {
      setRegion(event.target.value);
  }
  const changeCode = (event) => {
      setCode(event.target.value);
  }
  
  const submitCreate = (event) => {
      event.preventDefault(); 
      postCity (name,region,code)

      navigate('/cities')
  }
  return (
      <div className='col-md-4 m-auto'>
          <h4>New City</h4>
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
                  <button onClick={submitCreate} type="submit" className="btn btn-primary form-control" >Create</button>
              </div>
          </form>
          
          
     </div>
  );
}

export default CreateCity