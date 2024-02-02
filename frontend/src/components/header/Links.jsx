import { ExpandMore, KeyboardAltOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import React from 'react'

export default function Links({ title }) {
    return (
        <div>
            <Box sx={{
                ":hover .show-when-hover": { display: "block" }, ':hover': { cursor: "pointer" },
                display: "flex", alignItems: "center", position: "relative", zIndex: "2"
            }}>
                <Typography sx={{ fontSize: "13px" }}>
                    {title}
                </Typography>
                <ExpandMore />
                <Box className=' show-when-hover' sx={{
                    position: "absolute",
                    top: "100%", minWidth: "150px", transform: "translatex(-50%)",
                    left: "50%", display: "none"
                }}>
                    <Paper sx={{ mt: 2 }}>
                        <nav aria-label="secondary mailbox folders">
                            <List disablePadding>
                                <ListItem sx={{ width: "100%" }} disablePadding >
                                    <ListItemButton >
                                        <ListItemText sx={{ '.MuiTypography-root': { fontSize: "13px" } }}
                                            primary="Dash board" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem sx={{ ":hover .when-hover-poducts": { display: "block" }, width: "150px", position: "relative" }} disablePadding >


                                    <ListItemButton sx={{ '.MuiButtonBase-root .css-1b3zjjm-MuiButtonBase-root-MuiListItemButton-root': { px: '0', mx: "0" } }}>

                                        <ListItemText sx={{ '.MuiTypography-root': { fontSize: "13px", px: "0px", mx: "0px" } }}
                                            primary="Products" />
                                        <Box flexGrow={1} />
                                        <KeyboardArrowRightOutlined fontSize='small' />

                                    </ListItemButton>

                                    <Box className="when-hover-poducts " sx={{
                                        position: "absolute", left: "100%", top: "0", paddingLeft: "10px", display: "none"
                                    }}>
                                        < Paper sx={{ minWidth: "150px" }}>
                                            <nav aria-label="secondary mailbox folders" >
                                                <List>
                                                    <ListItem disablePadding>
                                                        <ListItemButton>
                                                            <ListItemText sx={{ '.MuiListItemText-root': { fontSize: "13px" } }} primary="Add product" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                    <ListItem disablePadding>
                                                        <ListItemButton component="a" href="#simple-list">
                                                            <ListItemText sx={{ '.MuiListItemText-root': { fontSize: "13px" } }} primary="Edit product" />
                                                        </ListItemButton>
                                                    </ListItem>
                                                </List>
                                            </nav>
                                        </ Paper>
                                    </Box>

                                </ListItem>

                                <ListItem sx={{ width: "100%" }} disablePadding >
                                    <ListItemButton >
                                        <ListItemText sx={{ '.MuiTypography-root': { fontSize: "13px" } }}
                                            primary="Orders" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ width: "100%" }} disablePadding >
                                    <ListItemButton >
                                        <ListItemText sx={{ '.MuiTypography-root': { fontSize: "13px" } }}
                                            primary="Profile" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </nav>
                    </Paper>
                </Box >
            </Box >
        </div >
    )
}
