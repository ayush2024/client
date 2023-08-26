import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Badge } from '@mui/material'
import { styled } from "@mui/material/styles";
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';


import LoginDialog from '../Login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        fonstSize: 16,
        alignItema: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));




const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'nond',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    padding: 5px 40px;
    height: 32px;
    box-shadow: none;
    
`;

const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart)

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container to="/cart">
                <Badge  badgeContent={cartItems.length} color='secondary'>
                <ShoppingCart />
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons