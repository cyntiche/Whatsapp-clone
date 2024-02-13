import logo from './logo.svg';
import './App.css';
import TitleBar from './components/Title-bar/Title-bar';
import SideBar from './components/Side-bar/Side-bar';

function App() {
  return (
    <div className="App">
    <TitleBar />
    <SideBar/>
    </div>
  );
}

export default App;
