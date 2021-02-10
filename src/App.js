
import './App.css';
import './firebase';




import Links from './components/Links'
import { ToastContainer } from 'react-toastify'
import React, { Component } from 'react-toastify/dist/ReactToastify.css'






function App() {



  return (
    <div className="container p-4 ">
      <div className="d-flex justify-content-center">
      <Links />
      </div>
      <ToastContainer />
      </div>
  );
}

export default App;
