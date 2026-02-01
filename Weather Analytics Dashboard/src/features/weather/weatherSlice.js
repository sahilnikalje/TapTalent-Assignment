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
    reducers:{
        fetchStart(state){
            state.status='loading'
            state.error=null
        },
        fetchSuccess(state, action){
            state.status='succeeded'
            state.current=action.payload.current
            state.forecast=action.payload.forecast
        },
        fetchFailure(state, action){
            state.status='failed'
            state.error=action.payload
        }
    }
})

export const{fetchStart, fetchFailure, fetchSuccess}=weatherSlice.actions
export default weatherSlice.reducer