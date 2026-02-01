import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage=()=>{
    try{
        const data=localStorage.getItem('favourites')
        return data?JSON.parse(data):[]
    }
    catch{
        return []
    }
}

const saveToStorage=(favourites)=>{
    try{
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }
    catch{

    }
}

const initialState={
    cities:loadFromStorage()
}

const favouritesSlice=createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addFavourite(state, action){
            if(!state.cities.includes(action.payload)){
                state.cities.push(action.payload)
                saveToStorage(state.cities)
            }
        },
        removeFavourite(state, action){
            state.cities=state.cities.filter(
                (city)=>city!==action.payload
            )
            saveToStorage(state.cities)
        }
    }
})

export const {addFavourite, removeFavourite}=favouritesSlice.actions
export default favouritesSlice.reducer