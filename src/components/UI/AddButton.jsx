import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

export const AddButton = () => {
  const { open, setOpen } = useContext(ModalContext);

  return (
    <>
      <Tooltip
        title="Add post"
        sx={{
          position: 'fixed',
          left: { xs: 'calc(50% - 25px)', md: 20 },
          bottom: 20
        }}
      >
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => setOpen(true)}
        >
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
};
