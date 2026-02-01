import axios from 'axios'

const BASE_URL = "https://api.openweathermap.org/data/2.5"
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY

export const fetchCurrentWeather=async (city, unit)=>{
      if (!city) {
    throw new Error("city missing")
  }
    const resp=await axios.get(`${BASE_URL}/weather`,{
        params:{
            q:city,
            units:unit,
            appid:API_KEY
        }
    })
    return resp.data
}

export const fetchForecast=async (city, unit)=>{
    const resp=await axios.get(`${BASE_URL}/forecast`, {
        params:{
            q:city,
            units:unit,
            appid:API_KEY
        }
    })
    return resp.data
}