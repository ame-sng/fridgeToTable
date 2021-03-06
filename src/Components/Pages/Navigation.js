import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  appbar: {
      backgroundColor: 'black',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Bona Nova',
  },
  menuItems:{
    fontFamily: 'Futura',
    fontSize: 12,
    margin: 8,
    letterSpacing: '0.07em',
  }
})

const Navigation = () => {
  const classes = useStyles()


  return (
    
    <AppBar 
    position="static"
    className={classes.appbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Fridge to Table</Link></Typography>
        <Button className={classes.menuItems} color="inherit"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></Button>
        <Button className={classes.menuItems} color="inherit"><Link to="/recipes" style={{ color: 'white', textDecoration: 'none' }}>Recipes</Link></Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navigation;