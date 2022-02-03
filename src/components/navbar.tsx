import { AppBar, Grid, IconButton, Toolbar, Switch, Box } from '@material-ui/core';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdExitToApp, MdMenuOpen } from 'react-icons/md';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  toggleHiddenSidebar: () => void;
}

export function Navbar({ toggleHiddenSidebar }: NavbarProps) {
  const { type, changeTheme } = useTheme();

  return (
    <AppBar
      color='inherit'
      position='fixed'
      style={{
        boxShadow: '1 0px 8px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px 0px 10px 10px',
      }}
    >
      <Toolbar variant='dense'>
        <Grid container justifyContent='space-between' direction='row'>
          <Grid item lg={10}>
            <IconButton onClick={toggleHiddenSidebar}>
              <MdMenuOpen />
            </IconButton>
          </Grid>

          <Grid item>
            <Box mt={2}>
              <FaSun style={{ marginLeft: 5 }} />
              <Switch
                size='small'
                color='primary'
                onChange={changeTheme}
                checked={type === 'dark'}
              />
              <FaMoon style={{ marginLeft: 5 }} />
            </Box>
          </Grid>

          <Grid item>
            <IconButton>
              <MdExitToApp />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
