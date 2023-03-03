import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListBeers from "./pages/ListBeers.pages";
import NewBeer from "./pages/NewBeer.pages"
import RandomBeer from "./pages/RandomBeer.pages"
import BeerDetail from './pages/BeerDetail.page';
import Home from "./pages/Home.page"



function App() {
  return (
    <div className="h-100">
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/beers" element={<ListBeers/>} />
        <Route path="/beer/:beerId" element={<BeerDetail/>} />
        <Route path="/new" element={<NewBeer/>} />
        <Route path="/random" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
