import './App.css';
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Route, Routes} from 'react-router-dom'
import Coin from './pages/coin';
import Portfolio from './pages/portfolio'
import NavComponent from './components/navComponent/NavComponent';
import React from 'react';
import { Container } from './components/styles/Container.styled';

const theme = {
  colors:{
    header: '#191B1F',
    body: '#1F2128',
    whiteColor: '#FFFFFF',
  }
}

const GlobalStyle = createGlobalStyle`
    body{
      background: '#1F2128';
    }
  `
const darkTheme = {
  main:'black',
  secondary: 'white'
 }

const lightTheme = {
  main:'white',
  secondary: 'black'
 }

class App extends React.Component {
  state = {
    on: true,
  }

   handleClick = () => {
    this.setState({on: !this.state.on})
   }

  render(){

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Container>
            <NavComponent/>
              <Routes>
                <Route path='/coin' element={<Coin/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
              </Routes>
          </Container>
        </>
      </ThemeProvider>  
    );
  }
}

export default App;
