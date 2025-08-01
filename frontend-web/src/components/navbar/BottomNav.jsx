import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '75%',
          border: '1px solid',
          bgcolor: '#fff8e1',
          borderColor: 'grey.300',
          p: 1,
          m: 1,
          borderRadius: 4,
        }}
      >
        <BottomNavigation
          sx={{ bgcolor: '#fff8e1' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction to="/home" component={Link} label="Home"icon={<HomeIcon />} />
          <BottomNavigationAction label="History" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
};
