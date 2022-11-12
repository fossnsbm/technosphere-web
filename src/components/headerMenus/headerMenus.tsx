import * as React from 'react';
import './headerMenus.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { fontFamily, padding, textAlign } from '@mui/system';

const pages = [
    { text: 'ABOUT', href: '#' },
    { text: 'AGENDA', href: '#' },
    { text: 'SPEAKERS', href: '#' },
    { text: 'SPONSORS', href: '#' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeaderMenus() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        window.location.href = '/test';
    }

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ paddingLeft: "5%", paddingTop: "2%" }}>
                    <img src="src/assets/vector.png" alt="Hero_Logo" className='Nav_logo' />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{
                                paddingLeft: 12,
                                paddingTop: 5
                            }}
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
                                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Button color="inherit"
                                            key={page.text}
                                            href={page.href}
                                        >

                                            {page.text}
                                        </Button>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ paddingLeft: 50, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.text}
                                href={page.href}
                                onClick={handleCloseNavMenu}
                                sx={{ fontSize: 18, my: 2, color: 'white', display: 'block', paddingLeft: 3, paddingRight: 3 }}
                            >
                                {page.text}
                            </Button>
                        ))}
                        <button className='btn_reg' onClick={handleClick}>REGISTER NOW <img style={{ paddingLeft: 2, paddingTop: 2 }} src="src/assets/RightArrow.png" alt="arrow" className='right_arrow' /></button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default HeaderMenus;












