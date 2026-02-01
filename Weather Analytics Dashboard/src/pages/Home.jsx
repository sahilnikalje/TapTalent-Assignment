import React, { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadWeatherData } from './../features/weather/weatherSlice';
import Dashboard from '../Components/Dashboard/Dashboard';
import SearchBar from '../Components/Search/SearchBar'

function Home() {
    const dispatch=useDispatch()
    const unit=useSelector((state)=>state.settings.unit)
    const status=useSelector((state)=>state.weather.status)
    const error=useSelector((state)=>state.weather.error)

    const[city, setCity]=useState('Pune')

    useEffect(()=>{
        if(city){
            dispatch(loadWeatherData({city, unit}))
        }
    },[dispatch,city, unit])

    if(status==='loading'){
        return <div>Loading...</div>
    }
    if(status==='failed'){
        return <div>Error:{error}</div>
    }
    
  return (
    <div>
        <h1>Weather Analytics Dashboard</h1>
        <SearchBar onSelect={(selectedCity)=>setCity(selectedCity)}/>
        <Dashboard />
    </div>
  )
}

export default Home