import React, { useState } from 'react'
import { AppBar, Toolbar, Box, IconButton, List, ListItem, ListItemText, ListItemIcon, Typography, Divider, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MobileSlider from "@material-ui/core/Drawer"
import { ArrowBack, Home, ContactMail, AssignmentInd, Apps } from "@material-ui/icons"
import teacher from "../teacher.png"

//CSS STYLES

const useStyles = makeStyles(theme => ({
    navStyles: {
        width: 250,
        height: "100%",
        background: "tomato"
    },
    avatar: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        display: "block",
        margin: "0.5rem auto"
    }
}))

const listedItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    },
]

const NavBar = () => {

    const [state, setState] = useState({
        right: false
    })

    const toggler = ((slider, open) => () => {
        setState({ ...state, [slider]: open })
    })

    const classes = useStyles()
    const popSide = slider => (
        <Box onClick={toggler(slider, false)} className={classes.navStyles} component="div">
            <Avatar className={classes.avatar} src={teacher} alt="free Icon" />
            <Divider />
            <List>
                {listedItems.map((lstItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon>
                            {lstItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lstItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>

    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggler("right", true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography style={{ color: "tan" }}>
                            Portfolio
                        </Typography>
                        <MobileSlider open={state.right} anchor="right" onClose={toggler("right", false)}>
                            {popSide("right")}
                        </MobileSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar;
