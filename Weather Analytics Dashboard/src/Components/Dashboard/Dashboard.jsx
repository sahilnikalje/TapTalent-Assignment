import { useSelector } from "react-redux";
import CityCard from "./CityCard";

function Dashboard() {
    const favourites=useSelector((state)=>state.favourites.cities)
    const weather=useSelector((state)=>state.weather.current)
    const cities=favourites.length>0 ? favourites:weather?[weather.name] : []

  return (
    <div>
        <h2>Dashboard</h2>

        {cities.length===0 && <p>No cities to display</p>}

        {cities.map((city)=>(
            <CityCard
             key={city}
             city={city}
             weather={weather && weather.name===city ? weather:null}
            />
        ))}
    </div>
  )
}

export default Dashboard