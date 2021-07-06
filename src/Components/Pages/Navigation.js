import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <AppBar 
    position="static"
    className={classes.appbar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6"><Link to="/" style={{ color: 'white' }}>Fridge to Table</Link></Typography>
        <Button className={classes.menuItems} color="inherit"><Link to="/" style={{ color: 'white' }}>Home</Link></Button>
        <Button className={classes.menuItems} color="inherit"><Link to="/recipes" style={{ color: 'white' }}>Recipes</Link></Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

//   <Navbar bg="dark" variant="dark">
//   <Navbar.Brand>
//     <Link to="/">
//       <img
//       src={logo}
//       width="40"
//       height="40"
//       className="d-inline-block align-top"
//       alt="Fridge to Table logo"
//       />
//     </Link>
//   </Navbar.Brand>
//   <Nav className="mr-auto">
//     <Nav.Link><Link to="/">Home</Link></Nav.Link>
//     <Nav.Link><Link to="/recipes">Recipes</Link></Nav.Link>
//   </Nav>
// </Navbar>
