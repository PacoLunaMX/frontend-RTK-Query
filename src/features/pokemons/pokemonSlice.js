import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    offset:0,
    limit:20,
    pokemonPreSelected:{},
    pokemonObj:null
}


export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers:{
        nextPage: (state, action)=>{
            if(state.offset=== 120){
                return{...state, offset: state.offset + 20, limit: 11}
            }else{
                return{...state, offset: state.offset + 20, limit: 20}
            }
        },
        prevPage: (state, action)=>{
                return{...state, offset: state.offset - 20, limit: 20}
        },
        setPokemonPreSelected: (state, action)=>{
            return { ...state, pokemonPreSelected: action.payload}
        },
        setPokemonObj: (state, action) =>{
            return { ...state, pokemonObj: action.payload}
        }
        
    }

})

export const { nextPage, prevPage, setPokemonPreSelected, setPokemonObj } = pokemonSlice.actions ;

export default pokemonSlice.reducer;