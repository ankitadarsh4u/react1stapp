import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Component from './Components/Homepage/Component/Component';



function App() {
  return (
   
      <BrowserRouter>
      <Header/>
      <div className='app'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/learn' element={<h1>Learnpage</h1>}/>
        <Route path='/reference' element={<h1>Referencepage</h1>}/>
        <Route path='/community' element={<h1>Communitypage</h1>}/>
        <Route path='/ourcommunity' element={<h1>Our Communitypage</h1>}/>
        <Route path='/mycommunity' element={<h1>My Communitypage</h1>}/>
        <Route path='/blog' element={<h1>Blogpage</h1>}/>
        <Route path='/git' element={<h1>Gitpage</h1>}/>
        <Route path='/github' element={<h1>Github page</h1>}/>
        <Route path='/register' element={<h1>Register page</h1>}/>
      </Routes>
      </div>
      <Component/>
      <Footer/>
      </BrowserRouter> 
  );
}

export default App;
