import React from 'react'
import './PokemonRow.css';
import { useSelector, useDispatch } from 'react-redux';
import {  setPokemonPreSelected } from '../../features/pokemons/pokemonSlice';
import { useNavigate } from 'react-router-dom';


function PokemonRow({pokemon}) {
  const { pokemonPreSelected} = useSelector(state=> state.pokemonsState); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleClick = ()=>{
  
        if(pokemonPreSelected.name === pokemon.name){
          navigate(`/${pokemon.name}`)
        }else{
          dispatch(setPokemonPreSelected(pokemon))
        }}
    
    
  return (
    <div key={pokemon.name}  onClick={handleClick} className="Row">
      <p>{pokemon.name}</p>
      <img src="pokeball.png" alt="" style={{width:"20px", height:"20px"}}/>
    </div>
  )
}

export default PokemonRow