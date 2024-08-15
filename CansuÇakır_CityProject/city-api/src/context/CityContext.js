import React, {createContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'


const cityContext= createContext();

export const Provider = ({children})=> {

   const navigate = useNavigate();

   const [cities, setCities] = useState([])
   const [city, setCity] = useState({}) 
   const getCities = async () => {
     const response = await axios.get('https://localhost:7136/api/Cities');
     setCities(response.data)
   }  

   const getCity = async (cityId) => {
     const response = await axios.get(`https://localhost:7136/api/Cities/${cityId}`) 
     setCity(response.data)
   }
 
   const postCity = async (name,region,code) => {
     const response = await axios.post('https://localhost:7136/api/Cities', { 
       name,  
       region,
       code
     });
     navigate('/cities')
   }

   const updateCity = async (updatedCity) => {
     const response = await axios.put(`https://localhost:7136/api/Cities/`, updatedCity); 
     navigate('/cities')
   }

   const deleteCity = async (cityId) => {
     const response = await axios.delete(`https://localhost:7136/api/Cities/${cityId}`) 
   }

   const sharedCities = {
       cities,
       city,
       getCities,
       postCity,
       deleteCity,
       getCity,
       updateCity
   }
   return (
       <cityContext.Provider value={sharedCities}>
           {children}
       </cityContext.Provider>
   ) 
}

export default cityContext