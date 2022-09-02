import { EmojiEmotions } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Modal,
  Stack,
  styled,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { ModalContext } from './context/ModalContext';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  m: 0
};

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center'
}));

const MyModal = () => {
  const { open, setOpen } = useContext(ModalContext);

  return (
    <Modal
      open={open}
      onClose={(e) => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" color="gray" textAlign="center">
          Create Post
        </Typography>
        <UserBox>
          <Avatar
            sx={{ width: '100px', height: '100px' }}
            src="https://i.pravatar.cc/300"
          />
          <Typography fontWeight={500} variant="span">
            User Name
          </Typography>
        </UserBox>
        <TextField
          sx={{ width: '100%' }}
          id="standard-multiline-static"
          multiline
          rows={2}
          variant="standard"
        />
        <Stack direction="row" gap={1}>
          <EmojiEmotions/>
        </Stack>
      </Box>
    </Modal>
  );
};

export default MyModal;
