import logo from './logo.svg';
import './App.css';
import AppProvider from './AppContext';
import QuickForm from './QuickForm';
import FlavorList from './FlavorList';

function App() {
  
  return (
    <AppProvider>
      <div className="App">
        <QuickForm />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FlavorList/>
        </header>
        
      </div>
    </AppProvider>
  );
}

export default App;
