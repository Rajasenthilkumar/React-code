import logo from './logo.svg';
import './App.css';
import Analogclock from './Analogclock';
import First from './Login'
import Second from './Header';
import Third from './Third'
import Api from './Api'
import Four from './Four'
import From from './Sample1/Form'
import Check from './payments/Checkout'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         {/* <Analogclock/> 
         <First/>
        <Second/>
        <Third/>
        <Api/>
        <Four/> 
        <From/> */}
  <Check/>
      </header>
    </div>
  );
}

export default App;
