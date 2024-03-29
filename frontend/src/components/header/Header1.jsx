// @ts-nocheck
import React from 'react'
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme, Box, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
    'AR',
    'EN',

];
export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
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

    return (
        <Box sx={{
            bgcolor: "#2B3445",
            py: "4px",
            borderRadius: "5px 0px 0px 5px",

        }}>
            <Container>
                <Stack direction={"row"} alignItems={"center"}>    <Typography
                    sx={{
                        mr: 2,
                        p: "4px 10px",
                        bgcolor: "#D23F57",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "#fff",
                    }}
                    variant="body2"
                >
                    HOT
                </Typography>

                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        Free Express Shipping
                    </Typography>
                    <Box flexGrow={1} />

                    <div  >
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <LightModeOutlined sx={{ fontSize: "16px", color: "#FFF" }} />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined sx={{ fontSize: "16px" }} />
                            </IconButton>
                        )}
                    </div>


                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ p: 0, m: 0, color: "#fff" }}
                    >
                        <ListItem

                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{ "&:hover": { cursor: "pointer" }, padding: "4px 8px" }}
                        >
                            <ListItemText
                                sx={{ ".MuiTypography-root": { fontSize: "10px", color: "#FFF" } }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: "16px", color: "#FFF" }} />
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
                                sx={{ fontSize: "11px", padding: "3px 10 px", minHeight: "10px" }}
                                key={option}

                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    <FacebookIcon
                        sx={{
                            fontSize: "16px",
                            mx: 1,
                            color: "#fff"

                        }} />
                    <TwitterIcon sx={{
                        fontSize: "16px",
                        color: "#fff"

                    }} />
                    <InstagramIcon sx={{
                        fontSize: "16px",
                        color: "#fff",
                        marginRight: 2,
                        marginLeft: 1

                    }} />
                </Stack>
            </Container>

        </Box>
    )
}
