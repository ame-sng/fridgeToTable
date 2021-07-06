import React from 'react'
import { Link } from 'react-router-dom'
import RandomRecipes from '../Recipe/RandomRecipes'
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
               No more scratching your head about what to cook
           </Typography>
           
           <Typography 
           variant = "body1"
           align= "center"
           gutterBottom
           >
               Simply input your available ingredients and get recipes
           </Typography>
           <br/>
           <Button 
           className= {classes.btn}
           size="large"
           >
           <Link to="/recipes" style={{ color: 'white' }}>Let's Cook</Link>
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

{/* <h2 className="formheading" className="text-center">No more scratching your head about what to cook</h2>
<p>Simply input your available ingredients and get recipes</p>
<Button variant="dark"><Link to="/recipes">Let's Cook</Link></Button>
<RandomRecipes /> */}