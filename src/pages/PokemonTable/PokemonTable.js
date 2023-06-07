import React from 'react'
import { useGetPokemonsQuery }  from '../../api/services/pokemons'
import PokemonRow from '../../components/PokemonRow/PokemonRow'
import './PokemonTable.css'
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../../features/pokemons/pokemonSlice';



function PokemonTable() {
    const {offset, limit,} = useSelector(state=> state.pokemonsState); 
    const { data: pokemonsData} = useGetPokemonsQuery({offset, limit})    
    const dispatch = useDispatch();

    const handleClickNext = ()=>{
      dispatch(nextPage())
    }
  
    const handleClickPrev = ()=>{
      dispatch(prevPage())
    }
    
  return (
    <div className='pk-table'>
      <div className='table-container'>
      {pokemonsData && 
      pokemonsData.results.map((pokemon)=>(
        <PokemonRow pokemon={pokemon}/>
      ))
      }
      </div>
      <div className='button-container'>
        {pokemonsData  && pokemonsData.previous && <button onClick={handleClickPrev}>Atrás</button>}
        {offset !== 140 && <button  onClick={handleClickNext}>Siguiente</button>}
      </div>
    </div>
  )
}

export default PokemonTable