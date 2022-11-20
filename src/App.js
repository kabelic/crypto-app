import './App.css';
import {createGlobal, ThemeProvider} from 'styled-components'
import {Route, Routes} from 'react-router-dom'
import Coin from './pages/coin';
import Portfolio from './pages/portfolio'
import NavComponent from './components/navComponent/NavComponent';

function App() {
  
  return (
    // <ThemeProvider>
      <div className="App">
        <NavComponent/>
          <Routes>
            <Route path='/coin' element={<Coin/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
      </div>
    /* </ThemeProvider> */
  );
}

export default App;
