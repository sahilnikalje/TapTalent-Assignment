import { useSelector } from "react-redux";
import TemperatureChart from "../Charts/TemperatureChart";

function WeatherDetails() {
    const current=useSelector((state)=>state.weather.current)
    const forecast=useSelector((state)=>state.weather.forecast)

    if(!current || !forecast){
        return null
    }
  return (
    <div style={{ marginTop: "24px" }}>
        <h2>Detailed Weather</h2>

      <div>
        <p>Feels Like: {current.main.feels_like}</p>
        <p>Pressure: {current.main.pressure}</p>
        <p>Humidity: {current.main.humidity}</p>
        <p>Visibility: {current.visibility}</p>
        <p>Wind Direction: {current.wind.deg}</p>
      </div>

      <TemperatureChart forecast={forecast} />
    </div>
  )
}

export default WeatherDetails