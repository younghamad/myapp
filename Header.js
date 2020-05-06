import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core"
import teacher from "../teacher.png"
import Typed from "react-typed"
import { makeStyles } from "@material-ui/core/styles"


//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedCon: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
        transform: "translate(-50%, -50%)"
    }
}))

const Header = () => {
    const classes = useStyles()
    return (

        <Box className={classes.typedCon}>
            <Grid container justify="center">
                <Avatar src={teacher} alt="free Icon" className={classes.avatar} />
            </Grid>
            <Typography className={classes.title} variant="h5">
                <Typed strings={["Ahmad Tijani"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Designer", "Web Developer", "Frontend Programmer"]}
                    typeSpeed={40} backSpeed={50} loop />
            </Typography>
        </Box>
    )
}

export default Header;
