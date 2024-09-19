import { Avatar, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SoulAvatar from '../../assets/images/soul-avatar.png';
import { TbEdit } from 'react-icons/tb';


function Navbar({ children }) {
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <Box width="100%">
            <Stack direction='row' spacing={1} sx={{
                p: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: "secondary.main"
            }}>
                <Avatar src={SoulAvatar} alt="Soul Avatar" sx={{ width: 50, height: 50 }} />
                <Typography variant='h4'>New Chat</Typography>
                <TbEdit fontSize={24} />
            </Stack>
            <Box sx={{ m: 1, p: 1, backgroundColor: 'secondary.main', borderRadius: 2 }}>
                <Typography variant='body1' fontWeight={700}>
                    Past Conversations
                </Typography>
            </Box>
        </Box >
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: 'none',
                    background: 'linear-gradient(180deg, rgb(235 231 243) 0%, rgb(248 244 255) 100%)',
                }}
            >
                <Toolbar >
                    <IconButton
                        color="primary"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <GiHamburgerMenu />
                    </IconButton>
                    <Typography variant="h2" fontWeight={700} color={'primary'}>
                        Bot AI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box >
    );
}

export default Navbar;
