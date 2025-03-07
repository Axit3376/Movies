import './css/App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Fav from './pages/Fav';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';





function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fav' element={<Fav />} />
      </Routes>
    </main>
      {/* {movieNumber === 1 ? (
        <MovieCard  movie={{title: "Film", release_date: "2024"}}/>
      ) : (
        <MovieCard  movie={{title: "Film2", release_date: "2024"}}/>
      )} */}
    /</MovieProvider>
  )
}


export default App;
