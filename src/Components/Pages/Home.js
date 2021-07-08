import React from 'react'
import { Link } from 'react-router-dom'
import RandomRecipes from '../RandomRecipes/RandomRecipes'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        backgroundColor: 'black',
        margin: '0 auto',
        display: 'flex',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: 1,
        borderRadius: 0,
        padding: '0.5rem 1.5rem',
        '&:hover':{
            backgroundColor: '#302903',
        }
    },
    header:{
        backgroundColor: '#ffda07',
        padding: 100,
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <>
        <div className= {classes.header}>
           <Typography 
           variant = "h3"
           align="center"
           gutterBottom
           >
               No more scratching your head over what to cook
           </Typography>
            
            <Typography 
            variant = "body1"
            align= "center"
            gutterBottom
            >
                Tell us what you have and we'll tell you what to make
            </Typography>
            <br/>
            <Button 
            className= {classes.btn}
            size="large"
            >
            <Link to="/recipes" style={{ color: 'white', textDecoration: 'none' }}>Let's Cook</Link>
            </Button>
        </div>
        <br/>

        <Container>
        <RandomRecipes />
        </Container>
        </>
    )
}

export default Home
