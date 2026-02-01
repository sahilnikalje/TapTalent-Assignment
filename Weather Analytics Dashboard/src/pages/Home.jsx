import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadWeatherData } from './../features/weather/weatherSlice';

function Home() {
    const dispatch=useDispatch()
    const unit=useSelector((state)=>state.settings.unit)
    const{current, status, error}=useSelector((state)=>state.weather)

    useEffect(()=>{
        dispatch(loadWeatherData({city:'Pune', unit}))
    },[dispatch, unit])

    if(status==='loading'){
        return <div>Loading...</div>
    }
    if(status==='failed'){
        return <div>Error:{error}</div>
    }
    
  return (
    <div>
        <h1>Weather Dashboard</h1>

        {current && (
            <div>
                <h2>{current.name}</h2>
                <p>Temperature:{current.main.temp}</p>
                <p>Humidity: {current.main.humidity}</p>
                <p>Wind Speed: {current.wind.speed}</p>
            </div>
        )}
    </div>
  )
}

export default Home