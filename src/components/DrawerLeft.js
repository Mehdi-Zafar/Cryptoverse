import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home','Cryptocurrencies', 'Exchanges', 'News'];
const drawerWidth = 260;
const DrawerLeft = () => {
  const location = useLocation();
  const [activeMenu,setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(()=>{
    const handleResize=()=>setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return window.removeEventListener('resize',handleResize);
  },[])

  useEffect(()=>{
    if(screenSize < 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize])

    return ( 
      <div>
      {activeMenu ?
        <div>
          <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#060F2A"
            }}}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography variant="h4" color="primary">
            Cryptoverse
            </Typography>
          </Toolbar>
          <Divider />
          <div className="drawerlist">
            <List>
              {['Home', 'Cryptocurrencies', 'Exchanges', 'News'].map((text, index) => (
                <Link key={index} to={text === 'Home' ? '/':text === 'Cryptocurrencies'?'/cryptocurrencies':text === 'News'?'/news':text === 'Exchanges' ? '/exchanges':'/'} style={{textDecoration:"none"}}>
                  <ListItem key={text} disablePadding sx={{backgroundColor:location.pathname === '/' && text === "Home" ? '#060F60' : location.pathname === '/cryptocurrencies' && text === "Cryptocurrencies" ? '#060F60' : location.pathname === '/news' && text === "News" ? '#060F60' : location.pathname === '/exchanges' && text === "Exchanges" ? '#060F60':"none",'&:hover':{backgroundColor:"#060F45"}}}>
                      <ListItemButton sx={{color:"beige"}}>
                        <ListItemIcon sx={{color:"beige"}}>
                          {index === 0 ? <HomeOutlinedIcon /> : index === 1 ? <ShowChartOutlinedIcon /> : index === 2 ? <CurrencyExchangeOutlinedIcon/> : <LightbulbOutlinedIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </div> :
    <div>
      <AppBar position="static" sx={{backgroundColor:"#060F2A",padding:"3px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page === 'Home' ? '/':page === 'Cryptocurrencies'?'/cryptocurrencies':page==='Exchanges'?'/exchanges':page==='News'?'/news':'/'}><Typography textAlign="center">{page}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            color="primary"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Cryptoverse
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>  
    </div>}
    </div>
     );
}
 
export default DrawerLeft;