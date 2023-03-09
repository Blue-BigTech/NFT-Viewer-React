import './App.css';
import MainPage from './pages/MainPage';
import AppContextProvider from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <MainPage />
      </div>
    </AppContextProvider>
  );
}

export default App;
