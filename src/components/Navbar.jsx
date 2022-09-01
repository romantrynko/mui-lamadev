import { BlurOn, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
}));

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Trynko DEV
        </Typography>
        <BlurOn sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
