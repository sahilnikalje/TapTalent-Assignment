import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'

function TemperatureChart({forecast}) {
    if(!forecast || !forecast.list){
        return null
    }
    const data=forecast.list.slice(0,0).map((item)=>({
        time:item.dt_txt.split(" ")[1],
        temp:item.main.temp
    }))
  return (
<div style={{ width: "100%", height: 300 }}>
      <h3>Hourly Temperature</h3>

      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>  )
}

export default TemperatureChart