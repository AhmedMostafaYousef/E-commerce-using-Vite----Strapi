import { ExpandMore, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';



const Search = styled('div')(({ theme }) => ({

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #333",
    '&:hover': {
        border: "1px solid #777",
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "300px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const options = [
    'Categories',
    'Cars',
    'Clothes',
    'Electronics',
];
export default function Header2() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    return (
        <Container sx={{ my: 1, display: "flex", justifyContent: "space-between" }}>
            <Stack alignItems="center" >
                <ShoppingCartCheckoutOutlined></ShoppingCartCheckoutOutlined>
                <Typography variant='body1'>
                    E-commerce
                </Typography>
            </Stack>
            <Stack sx={{ flexGrow: 0.3 }}>
                <Search sx={{ borderRadius: "22px", display: "flex", justifyContent: "space-between" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <div >
                        <List
                            component="nav"
                            aria-label="Device settings"
                            // @ts-ignore
                            sx={{ bgcolor: theme.palette.myColor.main, borderRadius: "0px 22px 22px 0px", p: "0px", }}
                        >
                            <ListItem

                                id="lock-button"
                                aria-haspopup="listbox"
                                aria-controls="lock-menu"
                                aria-label="when device is locked"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickListItem}
                            >
                                <ListItemText
                                    //className='border'
                                    sx={{ width: 80, textAlign: "center", "&:hover": { cursor: "pointer" } }}
                                    secondary={options[selectedIndex]}
                                />
                                <ExpandMore sx={{ fontSize: "16px" }} />
                            </ListItem>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'lock-button',
                                role: 'listbox',
                            }}
                        >
                            {options.map((option, index) => (
                                <MenuItem
                                    sx={{ fontSize: 13 }}
                                    key={option}

                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </Search >
            </Stack>
            <Stack direction="row" alignItems="center">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCart />
                    </StyledBadge>
                </IconButton>
                <IconButton>
                    <Person2OutlinedIcon />
                </IconButton>

            </Stack>
        </Container>
    )
}
