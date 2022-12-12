import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import meui from '../../estaticos/image/meui.png';
import NOSSA_MISSAO from '../../estaticos/image/NOSSA_MISSAO.png';
import login from '../../estaticos/image/login.png';
import SOBRE_NOS from '../../estaticos/image/SOBRE_NOS.png';
import HOME from '../../estaticos/image/HOME.png';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='fundo'>
                <Toolbar variant="dense">
                    <Box className='comenzo'>
                        <Typography >
                        <img src={meui} className='imglogo'></img>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" className='margim HOME'>
                        <Box mx={7} className='HOME'>
                            <Link to='/' className='text-decorator-none'>
                            <Typography variant="h5"  >
                                <img src={HOME} className='HOME'></img>
                            </Typography>
                            </Link>

                        </Box>
                        <Box mx={7} className='cursor margim2' >
                            <Link to='/sobrenos' className='text-decorator-none '>
                            <Typography variant="h5"  >
                                <img src={SOBRE_NOS} className='SOBRE_NOS'></img>
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={7} className='cursor margim2'>
                            <Link to='/nossamissao' className='text-decorator-none '>
                            <Typography variant="h5"  >
                                <img src={NOSSA_MISSAO} className='NOSSA_MISSAO'></img>
                            </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor margim3'>
                            <Link to='/login'>
                            <Typography variant="h5"  >
                                <img src={login} className='imglogin'></img>
                            </Typography>
                            </Link>
                        </Box>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;