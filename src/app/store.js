import { configureStore } from "@reduxjs/toolkit";
import  pokemonReducer from "../features/pokemons/pokemonSlice";
import {pokemonApi} from '../api/services/pokemons'


export const store = configureStore({
    reducer:{
        pokemonsState: pokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
})