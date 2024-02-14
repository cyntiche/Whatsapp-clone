import logo from "./logo.svg";
import "./App.css";
import TitleBar from "./components/Title-bar/Title-bar";
import SideBar from "./components/Side-bar/Side-bar";
import Contacts from "./components/Contacts/Contacts";
import ChatSection from "./components/Chat-section/Chat-section";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="content-container">
        <SideBar />
        <Contacts />
        <ChatSection />
      </div>
    </div>
  );
}

export default App;
