import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PokemonTable from './pages/PokemonTable/PokemonTable';
import SinglePokemon from './pages/SinglePokemon/SinglePokemon';
import Error from './pages/Error/Error';


function App() {
  return (
    <Routes>
    <Route element={<MainLayout/>}>
      <Route  path='/' element={<PokemonTable/>}/>
      <Route  path='/:name' element={<SinglePokemon/>}/>
      <Route  path='*' element={<Error/>}/>
    </Route>
  </Routes>
  );
}

export default App;
