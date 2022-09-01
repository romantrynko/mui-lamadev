import styled from '@emotion/styled';
import { Add, Settings } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

function App() {
  const BlueButton = styled(Button)({
    background: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      background: 'lightBlue',
      transform: 'translateY(-1px)'
    },
    '&:disabled': {
      background: 'gray',
      color: 'white'
    }
  });

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Typography variant="h1" component="p">
        It uses typography
      </Typography>
      <BlueButton>My button</BlueButton>
    </div>
  );
}

export default App;
