import React, { useEffect, useState } from 'react';
// import './App.css';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';


function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

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

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken} />
    :
    <Auth updateToken={updateToken}/>)
  }

  //render method is down here

  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
