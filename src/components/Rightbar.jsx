import { Box, Typography } from '@mui/material';
import React from 'react';
import AlignItemsList from './UI/ConversationsList';
import FriendsAvatars from './UI/FriendsAvatars';
import PhotoGallery from './UI/PhotoGallery';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online friends
        </Typography>
        <FriendsAvatars />

        <Typography variant="h6" fontWeight={100} mb={2} mt={4}>
          Latest Photos
        </Typography>
        <PhotoGallery />
        <Typography variant="h6" fontWeight={100} mt={4}>
          Latest Conversations
        </Typography>
        <AlignItemsList/>
      </Box>
    </Box>
  );
};
