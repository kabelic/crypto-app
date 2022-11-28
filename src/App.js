import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Route, Routes} from 'react-router-dom'
import React from 'react';
import './App.css';
import Coin from './pages/coin';
import Portfolio from './pages/portfolio'
import NavComponent from './components/navComponent/NavComponent';
import { Container } from './components/styles/Container.styled';
import { Body } from './components/styles/Body.styled';
import Home from './pages/Home';

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
  main:'#1F2128',
  secondary: 'white',
 }

const lightTheme = {
  main:'white',
  secondary: '#1F2128'
 }

class App extends React.Component {
  state = {
    on: false,
  }

   handleClick = () => {
    this.setState({on: !this.state.on})
   }
  render(){
    return (
      <ThemeProvider theme={this.state.on ? lightTheme : darkTheme}>
          <GlobalStyle/>
          <Container>
            <NavComponent clicked={this.handleClick}/>
            <Body>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/coin' element={<Coin/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
              </Routes>
            </Body>
          </Container>
      </ThemeProvider>  
    );
  }
}

export default App;
