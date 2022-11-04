import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Any enquiries, please email </p>
        <p className = "link" onClick={() => window.location = 'mailto:info@hackgrad.com'}>info@hackgrad.com</p>
        <p>Please check back soon for updates ...</p>
 
      </header>
    </div>
  );
}

export default App;
