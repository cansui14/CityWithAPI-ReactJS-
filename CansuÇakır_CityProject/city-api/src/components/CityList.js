import React, { useContext } from 'react';
import CityContext from '../context/CityContext'; 
import { useNavigate } from 'react-router-dom';

const CityList = () => {
  const navigate = useNavigate();
  const { cities, deleteCity, getCity } = useContext(CityContext);

  const onEditCity = async (cityId) => {
    await getCity(cityId);
    navigate('/editCity');
  };

  return (
    <div className="w-75 m-auto">
      <table className="table table-primary mt-3 table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Region</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => {
            return (
              <tr key={index}>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.region}</td>
                <td>{city.code}</td>
                <td>
                  <button className="btn btn-warning mx-2" onClick={() => onEditCity(city.id)}>
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteCity(city.id)}>
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CityList;
