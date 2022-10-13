import React, { useEffect, useState } from 'react';
import './App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SignUpPage from './pages/authPages/signUpPage/SignUpPage';
import SignInPage from './pages/authPages/signInPage/SignInPage';
import HomePage from './pages/homePage/HomePage';
import Header from './components/common/headers/Header';
import SideBar from './components/sideBar/SideBar';
import { useAppSelector } from './store/StoreHooks';
import Toaster from "./components/common/toaster/Toaster";

function App() {
  const {toggleSideBar} = useAppSelector(state => state.settings)
  const {isAuth} = useAppSelector(state => state.auth)
  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const location = useLocation()
  

  useEffect(() => {
    if(location.pathname === '/signIn' || location.pathname === '/signUp'){
      setShowSideBar(false)
    }else{
      setShowSideBar(true)
    }
  }, [location])

  return (
    <div className="App">
      <Toaster />
      <Header showSideBar={showSideBar} />
      {showSideBar && <SideBar />}
      <div style={{padding: !showSideBar ? '40px 8%' : toggleSideBar ? '40px 8% 40px 34%' : '40px 8%'}}>
        <Routes>
            <Route path='/signUp' element={isAuth ? <Navigate to='/' /> : <SignUpPage />} />
            <Route path='/signIn' element={isAuth ? <Navigate to='/' /> : <SignInPage />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
