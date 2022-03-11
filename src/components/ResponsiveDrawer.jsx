import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

import { styled } from '@mui/material/styles';

import { drawerWidth, sidebarLinkList } from "../utils/constants";

const displayObjMobile = { xs: 'block', sm: 'block', md: 'none' }
const displayObjDesktop = { xs: 'none', sm: 'none', md: 'block' }
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: theme.palette.common.white,
  paddingTop: theme.spacing(0.25),
  paddingBottom: theme.spacing(0.25),
}));
const StyledBox = styled(Box)({
  background: 'url(/img/bg.png) repeat'
});

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        mt={4}
        ml={3}
        mr={3}
        mb={3}
        sx={{ display: displayObjMobile }}
      >
        <Typography color="primary" variant="h4" component="div">Timothy<br />Shee</Typography>
        <Typography color="secondary" variant="body2" gutterBottom component="div">Full Stack Developer</Typography>
      </Box>
      <Divider />
      <List>
        {
          sidebarLinkList.map((sidebarLink, idx) => {
            const { text, link, icon } = sidebarLink;
            const Icon = icon;
            return (
              <Link key={text} href={link} color="#333" underline="none">
                <ListItem button>
                  <ListItemIcon>
                    <Icon sx={{ fontSize: 33 }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            )
          })
        }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          display: displayObjMobile,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <Typography color="primary" variant="h5" component="div">Timothy Shee</Typography>
            <Typography color="secondary" variant="body2" component="div">Full Stack Developer</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </StyledAppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{            
            display: displayObjMobile,
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: displayObjDesktop,
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <StyledBox
        component="main"
        sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar sx={{ display: displayObjDesktop }} />
        {children}
      </StyledBox>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
