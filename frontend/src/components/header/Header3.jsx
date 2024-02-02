// @ts-nocheck
import { Container, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useTheme } from '@emotion/react';
import ElectricBikeOutlinedIcon from '@mui/icons-material/ElectricBikeOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from './Links';
export default function Header3() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const pages = [{ mainLink: "Home", subLink: ["link1", "link2", "link3"] }, { mainLink: "Home", subLink: ["link1", "link2", "link3"] }, { mainLink: "Home", subLink: ["link1", "link2", "link3"] }];
    return (
        <Container sx={{ mx: "0px", mt: "10px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">

                <div>
                    <Button
                        // className='border'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{
                            width: "170px",
                            bgcolor: theme.palette.myColor.main,
                            color: theme.palette.text.secondary,

                        }}
                    >
                        <WindowIcon />

                        <Typography sx={{
                            padding: "0",
                            textTransform: "capitalize",
                            mx: 1,

                        }}>
                            categories
                        </Typography>
                        <Box flexGrow={1} />
                        <KeyboardArrowRightOutlinedIcon />
                    </Button>


                    <Menu

                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        sx={{
                            '.MuiPaper-root': {
                                width: "170px",
                                // @ts-ignore
                                bgcolor: theme.palette.myColor.main,
                                color: theme.palette.text.secondary,
                            }
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ElectricBikeOutlinedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Bickes</ListItemText>

                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <LaptopChromebookOutlinedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Electronics</ListItemText>

                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <MenuBookOutlinedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Books</ListItemText>


                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <SportsEsportsOutlinedIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Games</ListItemText>

                        </MenuItem>
                    </Menu>

                </div>
                {useMediaQuery('(min-width:900px)') &&
                    <Stack direction='row' gap={3}>
                        <Links title={"Home"}></Links>
                        <Links title={"Mega Menu"}></Links>
                        <Links title={"Full Screen Menu"}></Links>
                        <Links title={"Pages"}></Links>
                        <Links title={"User Account"}></Links>
                        <Links title={"Vendor Account"}></Links>
                    </Stack>

                }

                {useMediaQuery('(max-width:900px)') && <IconButton onClick={toggleDrawer("top", true)}>
                    <MenuIcon />
                </IconButton>
                }

                <Drawer
                    // @ts-ignore
                    anchor={"top"}
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                    sx={{ '.MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper': { height: "100%" } }}
                >
                    {<Box className="border"
                        sx={{ '.MuiBox-root': { justifyContent: "center", alignContent: "center" }, width: "450px", height: "auto", mx: "auto", mt: "5px", position: "relative", py: "0px", px: "0px" }}
                        role="presentation"

                        onKeyDown={toggleDrawer("top", false)}
                    >
                        <IconButton sx={{ ":hover": { rotate: "180deg", transition: "0.3s", "color": "red" }, position: "absolute", right: "10px" }} onClick={toggleDrawer("top", false)}>

                            <Close />
                        </IconButton>
                        <Container sx={{ mt: "50px" }} >





                            {
                                <List sx={{ p: "0px" }}>
                                    {pages.map((item) => (
                                        <ListItem sx={{ p: "0px" }} >
                                            <Accordion key={item} elevation={1} sx={{ ':hover .when-curser-hover': { display: "block" }, bgcolor: "initial", p: "0px", m: "0px" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography>{item.mainLink}</Typography>
                                                </AccordionSummary>
                                                <List sx={{ py: "0px", px: "0px", width: "400px" }}>
                                                    {item.subLink.map((item) => (


                                                        <ListItem className="when-curser-hover" sx={{ py: "0px", my: "0px", display: "none" }}>
                                                            <ListItemButton sx={{ py: "0px", my: "0px" }} component="a" href="#simple-list">
                                                                <ListItemText primary={item} />
                                                            </ListItemButton>
                                                        </ListItem>

                                                    ))}
                                                </List>

                                            </Accordion>

                                        </ListItem>

                                    ))

                                    }
                                </List>
                            }


                        </Container>



                    </Box>}

                </Drawer>
            </Stack>

        </Container>
    )
}
