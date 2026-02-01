import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addFavourite, removeFavourite} from '../../features/favourites/favouritesSlice'

function CityCard() {
    const dispatch=useDispatch()
    const favourites=useSelector((state)=>state.favourites.cities)

    const isFavourite=favourites.includes(city)

    const toggleFavourite=()=>{
        if(isFavourite){
            dispatch(removeFavourite(city))
        }
        else{
            dispatch(addFavourite(city))
        }
    }
    if(!weather){
        return null
    }
  return (
    <div style={{border: "1px solid #ccc", padding: "12px", marginBottom: "12px"}}>
        <h2>{city}</h2>
      <p>Temp: {weather.main.temp}</p>
      <p>Condition: {weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}</p>
      <p>Wind: {weather.wind.speed}</p>

      <button onClick={toggleFavourite}>
        {isFavourite?'Remove Favourite':'Add Favourite'}
      </button>
    </div>
  )
}

export default CityCard