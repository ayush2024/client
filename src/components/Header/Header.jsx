import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

// components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px
`
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    `

const CustomButtonWrapper = styled('span')(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));




const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <>
            <StyledHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <MenuButton color='inherit' onClick={handleOpen}>
                        <Menu />
                    </MenuButton>

                    <Drawer open={open} onClose={handleClose}>
                        {list()}
                    </Drawer>
                    <Component to='/'>
                        <img src={logoURL} alt='logo' style={{ width: 75 }} />
                        <Box style={{ display: 'flex' }}>
                            <SubHeading>Explore
                                <Box component="span" style={{ color: '#ffe500' }}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt="sub-logo" />
                        </Box>
                    </Component>
                    <Search />
                    <CustomButtonWrapper>
                        <CustomButtons />
                    </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    )
}

export default Header