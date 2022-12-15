import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {Route, Routes} from 'react-router-dom'
import React from 'react';
import { AiOutlineSetting, AiOutlineCodeSandbox } from 'react-icons/ai'
import { TfiWallet } from 'react-icons/tfi'
import { RiMessengerLine, RiAccountPinCircleLine } from 'react-icons/ri'
import { TbNews } from 'react-icons/tb'
import { SiMarketo } from 'react-icons/si'
import { CgTranscript } from 'react-icons/cg'
import { HiOutlineStar } from 'react-icons/hi'
import './App.css';
import Coin from './pages/coin';
import Portfolio from './pages/portfolio'
import NavComponent from './components/navComponent/NavComponent';
import { Container } from './components/styles/Container.styled';
import { Body, LeftSide, RightSide } from './components/styles/Body.styled';
import Home from './pages/Home';
import Logo from './components/LogoComponent';
import Ethereum from './pages/Ethereum';
import Bitcoin from './pages/Bitcoin';
import Dai from './pages/Dai';

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
  main:'#161616',
  secondary: '#FFFFFF',
  third: '#FFAF2C',
 }

const lightTheme = {
  main:'#FFFFFF',
  secondary: '#161616',
  third: '#FFAF2C',
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
      <ThemeProvider theme={this.state.on ? lightTheme : darkTheme}>
          <GlobalStyle/>
          <Container>
            <LeftSide>
              <Logo size={100} logoIcon={<AiOutlineCodeSandbox/>} title={'YOUR LOGO'} description={'CRYPTO AND STUFF'}/>
              <Logo logoIcon={<RiMessengerLine/>} title={'Overview'}/>
              <Logo logoIcon={<TfiWallet/>} title={'Wallets'}/>
              <Logo logoIcon={<TbNews/>} title={'News'}/>
              <Logo logoIcon={<SiMarketo/>} title={'Market'}/>
              <Logo logoIcon={<RiAccountPinCircleLine/>} title={'Account'}/>
              <Logo logoIcon={<CgTranscript/>} title={'Transactions'}/>
              <Logo logoIcon={<HiOutlineStar/>} title={'Portfolio'}/>
              <Logo logoIcon={<AiOutlineSetting/>} title={'Settings'}/>
            </LeftSide>
            <RightSide>
              <NavComponent clicked={this.handleClick}/>
              <Body>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/coin' element={<Coin/>}/>
                  <Route path='/coin/dai' element={<Dai/>}/>
                  <Route path='/coin/bitcoin' element={<Bitcoin/>}/>
                  <Route path='/coin/ethereum' element={<Ethereum/>}/>
                  <Route path='/portfolio' element={<Portfolio/>}/>
                </Routes>
              </Body>
            </RightSide>
            
          </Container>
      </ThemeProvider>  
    );
  }
}

export default App;
