

import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import logo from './logo.svg';
//import './App.css';


function App() {
  return (
  <>
    <Navbar title="Text utils"/>
    <div className='container'>
    <Textform heading ='Enter your Text to analyze'/>
    </div>
   
  </>
  );
  
}
export default App;
