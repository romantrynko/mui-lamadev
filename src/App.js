import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Box, Stack } from '@mui/material';
import { Navbar } from './components/Navbar';
import { AddButton } from './components/UI/AddButton';
import MyModal from './MyModal';
import { ModalContext } from './context/ModalContext';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <AddButton />
        <MyModal />
      </Box>
    </ModalContext.Provider>
  );
}

export default App;
