import { Box } from '@mui/material';
import ChatSection from './components/Chat-section/ChatSection';
import Contacts from './components/Contacts/Contacts';
import SideBar from './components/SideBar/SideBar';
import TitleBar from './components/TitleBar/TitleBar';

function App() {
  return (
    <Box style={{ height: '100svh', display:"grid", gridTemplateRows:"auto 1fr",overflow: 'hidden' }}>
      <TitleBar />
      <Box style={{ display: "grid", gridTemplateColumns: "40px 25% auto" }}>
      <SideBar />
      <Contacts />
      <ChatSection />
      </Box>
    </Box>
  );
}

export default App;
