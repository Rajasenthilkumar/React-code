import logo from './logo.svg';
// import './App.css';
import Analogclock from './Component/Sample/Clock/Analogclock';
import First from './Component/Sample/Clock/Login'
import Second from './Component/Sample/Clock/Header';
import Third from './Component/Sample/Clock/Third'
import Api from './Component/Sample/Clock/Api'
import Four from './Component/Sample/Clock/Four'
import From from './Component/Sample//Form/Form'
import Check from './Component/Sample/Payments/Checkout'

import Header from './Component/Api integration/Header'
import Router from './Component/Api integration/Router'

import Route from'./Component/Projectsetup/Route'
import Tournaments from'./Component/HermisTask/Tournaments'
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
      <First />
      <Second />
      <Third />
      <Api />
      <Four />
      < Analogclock /> 
      <From />*/}
      {/* <Header />
      <Router /> */}
    {/* <Check />  */}
      {/* <Route/> */}
      <Tournaments/>
    </div>
  );
}


export default App;



// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './Component/HermisTask/Header';
// import Activities from './Component/HermisTask/Activities'; // Import your Activities component
// import Events from './Component/HermisTask/Tournamentviewpage'; // Import your Events component
// // Import other components as needed

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/activities" component={Activities} />
//                 <Route path="/events" component={Events} />
//                 {/* Add other routes for your components */}
//             </Switch>
//             <Header />
//             {/* Other components or routes */}
//         </Router>
//     );
// };

// export default App;



