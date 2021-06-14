import logo from './logo.svg';
import './App.css';
import Lablogin from './Components/Lablogin';
import Loggedin from './Components/loggedin';
import Patientlogin from './Components/Patientlogin';
import Patientloggedin from './Components/Patientloggedin';
import HomePage from './Components/HomePage';
import Registration from './Components/Registration';



function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage>
     <Lablogin/>
     <Loggedin/>
     <Patientlogin/>
     <Patientloggedin/> */}
     <Registration/>     
     
    </div>
  );
}

export default App;
