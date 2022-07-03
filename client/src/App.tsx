import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/authPages/signUpPage/SignUpPage';
import SignInPage from './pages/authPages/signInPage/SignInPage';
import HomePage from './pages/homePage/HomePage';
import Header from './components/common/headers/Header';
import SideBar from './components/sideBar/SideBar';
import { useAppSelector } from './store/StoreHooks';

function App() {
  const {toggleSideBar} = useAppSelector(state => state.settings)
  return (
    <div className="App">
      <Header />
      <SideBar />
      <div style={{paddingLeft: toggleSideBar ? '34%' : '8%'}}>
        <Routes>
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/signIn' element={<SignInPage />} />
            <Route path='/' element={<HomePage />} /> 
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
