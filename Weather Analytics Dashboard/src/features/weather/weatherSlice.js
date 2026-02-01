import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCurrentWeather, fetchForecast } from "./weatherAPI";

export const loadWeatherData=createAsyncThunk(
    'weather/loadWeatherData',
    async ({city, unit})=>{
        const current=await fetchCurrentWeather(city, unit)
        const forecast=await fetchForecast(city, unit)

        return{current, forecast}
    }
)

const initialState={
    current:null,
    forecast:null,
    status:'idle',
    error:null
}

const weatherSlice=createSlice({
    name:'weather',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder
      .addCase(loadWeatherData.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(loadWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.current = action.payload.current
        state.forecast = action.payload.forecast
      })
      .addCase(loadWeatherData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export default weatherSlice.reducer