import Header from './components/Header.jsx';
import Dashboard from './pages/dashboard.jsx';
import Logs from './pages/Logs.jsx';
import bg from './assets/bg.jpg';
import './App.css';

const App = () =>{
  return (
    <>
     <div style = {{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className='center-page'>
      <div className='glass-tile'>
      <Header title = "Eco Tracker EXP1" />
    <main Style = {{ pading: "0rem", textAlign: "auto"}}>
        <Dashboard/>
        
      </main> 
      </div>
    </div>
    <div>
     <div className='center-page'>
      <div className='glass-tile'>
      <Logs/>
      </div>
      </div>
    </div>
    
      

    </div>   
    </>
  )
}

export default App;