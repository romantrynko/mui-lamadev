import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Box, Stack, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { AddButton } from './components/UI/AddButton';
import MyModal from './MyModal';
import { ModalContext } from './context/ModalContext';
import React, { useState } from 'react';
import { createTheme } from '@mui/material';
// import { darkTheme } from './theme/theme';

function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('dark');

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <ModalContext.Provider value={{ open, setOpen }}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar mode={mode} setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <AddButton />
          <MyModal />
        </Box>
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
