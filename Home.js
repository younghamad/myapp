import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Particles from "react-particles-js"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 7,
                                size_min: 0.1,
                                sync: true
                            }
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true

                        }
                    }
                }}
            />

            <NavBar />
            <Header />
        </>
    )
}

export default Home;
