import React, { useEffect, Component, useState } from 'react';
// import './App.css';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';


function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect (() => {  //2
    document.title = "Workout Log Client";

    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => { //3
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  //render method is down here

  return (
    <div>
      <Sitebar />
      <Auth />
    </div>
  );
}

export default App;
