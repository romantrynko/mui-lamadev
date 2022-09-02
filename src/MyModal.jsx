import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
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
      <Box sx={style} bgcolor={'background.default'} color={'text.primary'}>
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
          <EmojiEmotions color="primary" />
          <PersonAdd color="secondary" />
          <VideoCameraBack color="error" />
          <Image color="success" />
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Post</Button>
          <Button sx={{ width: '100px' }}>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

export default MyModal;
