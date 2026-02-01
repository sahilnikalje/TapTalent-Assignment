import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadWeatherData } from '../features/weather/weatherSlice'
import WeatherDetails from '../Components/WeatherDetails/WeatherDetails'

function City() {
    const{name}=useParams()
    const dispatch=useDispatch()
    const unit=useSelector((state)=>state.settings.unit)
    const status=useSelector((state)=>state.weather.status)
    const error=useSelector((state)=>state.weather.error)

    useEffect(()=>{
        if(name){
            dispatch(loadWeatherData({city:name, unit}))
        }
    },[dispatch, name, unit])

    if(status==='loading'){
        return <div>Loafing weather</div>
    }
    if(status==='failed'){
        return <div>Error: {error}</div>
    }
  return (
    <div>
        <h1>City Weather Details</h1>
        <WeatherDetails/>
    </div>
  )
}

export default City