import { useState, useEffect } from "react";
import debounce from 'lodash.debounce'
import axios from "axios";


const BASE_URL= "https://api.openweathermap.org/geo/1.0"
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY

function SearchBar({onSelect}){
    const[query, setQuery]=useState('')
    const[res, setRes]=useState([])

    const searchCity=async(val)=>{
        if(!val){
            setRes([])
            return
        }

        try{
            const response=await axios.get(`${BASE_URL}/direct`, {
                params:{
                    q:val,
                    limit:5,
                    appid:API_KEY,
                }
            })

            setRes(response.data)
        }
        catch{
            setRes([])
        }
    }

    const debouncedSearch=debounce(searchCity, 500)

    useEffect(()=>{
        debouncedSearch(query)
        return debouncedSearch.cancel
    },[query])

    return(
        <div>
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {res.length > 0 && (
        <ul>
          {res.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect(city.name)
                setQuery("")
                setRes([])
              }}
              style={{ cursor: "pointer" }}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
        </div>
    )
}

export default SearchBar