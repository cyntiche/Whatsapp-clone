import { Box } from '@mui/material';
import TitleBar from './components/TitleBar/TitleBar';
import SideBar from './components/SideBar/SideBar';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Box style={{ height: '100svh', display:"grid", gridTemplateRows:"auto 1fr"}}>
      <TitleBar />
      <Box style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
      <SideBar />
      <Contacts />
      </Box>
    </Box>
  );
}

export default App;
