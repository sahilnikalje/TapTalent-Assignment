import {configureStore} from '@reduxjs/toolkit'
import settingsReducer from '../features/settings/settingsSlice'
import favouritesReducer from '../features/favourites/favouritesSlice'
import weatherReducer from '../features/weather/weatherSlice'

export const store=configureStore({
    reducer:{
        settings:settingsReducer,
        favourites:favouritesReducer,
        weather:weatherReducer
    }
})