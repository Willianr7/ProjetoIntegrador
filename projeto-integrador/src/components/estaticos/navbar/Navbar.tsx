import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='fundo'>
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h3" color="textSecondary" className='fundoletras'>
                            Projeto MEUI
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={7} className='cursor'>
                            <Link to='/'>
                            <Typography variant="h5" color="textSecondary" className='fundoletras'>
                                <img src='https://w7.pngwing.com/pngs/660/409/png-transparent-computer-icons-home-page-home-page-icon-angle-text-logo-thumbnail.png'></img>
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={7} className='cursor'>
                            <Link to='/sobrenos'>
                            <Typography variant="h5" color="textSecondary" className='fundoletras'>
                                Sobre nós
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={7} className='cursor'>
                            <Link to='/nossamissao'>
                            <Typography variant="h5" color="textSecondary" className='fundoletras'>
                                Nossa Missão
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="textSecondary" className='fundoletras'>
                                
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="textSecondary" className='fundoletras'>
                                
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;