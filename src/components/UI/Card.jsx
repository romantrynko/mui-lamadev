import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from '@mui/material';
import React from 'react';

const MyCard = () => {
  return (
    <Card sx={{mb: 4}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'rgb(239 68 68)' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Happy Birthday Roman!"
        subheader="November 29, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/756903/pexels-photo-756903.jpeg?cs=srgb&dl=pexels-kadri-vosumae-756903.jpg&fm=jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is what you have and this is what you can take! Hold on and keep
          on going!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          sx={{
            color: 'rgb(157 23 77)',
            '&.Mui-checked': {
              color: 'rgb(219 39 119)'
            }
          }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MyCard;
