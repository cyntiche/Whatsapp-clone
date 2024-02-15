import { Box } from '@mui/material';
import TitleBar from './components/TitleBar/TitleBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <Box style={{ height: '100svh', display:"grid", gridTemplateRows:"auto 1fr"}}>
      <TitleBar />
      <SideBar />
    </Box>
  );
}

export default App;
