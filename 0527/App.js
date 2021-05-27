import logo from './logo.svg';
import './App.css';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles ,createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {green,orange,red} from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles({
  root:{
    background:'linear-gradient(45deg,#FE688B,#FF8E53)',
    border:0,
    marginBottom:15,
    borderRadius:15,
    color:'white',
    padding: '5px 30px'
  }
})
const useStyless = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const theme = createMuiTheme({
      typography:{
        h1:{
          fontSize:36,
        },
        subtitle1:{
          fontSize:18,
          marginBottom:3,
        },
      },
      palette: {
        primary:{
          main: green[500],
        },
        secondary:{
          main: red[500],
        }
      }
})
function ButtonStyleed(){
  const classes = useStyles();
  return (<Button className={classes.root}>Button with style</Button>)
}
function Checkboxe(){
  const [checked,setChecked] = React.useState(true);
  return(
    <FormControlLabel
    control={<Checkbox
    checked={checked}
    onChange={(e)=>setChecked(e.target.checked)}
    inputProps={{'aria-label':'primary checkbox'}}
    />
    }
    label="Hello"/>
  )
}

function ButtonAppBar() {
  const classes = useStyless();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar/>
    <div className="App">
      <header className="App-header">
      <Typography variant="h1">
        Welcome 
      </Typography>
      <Typography variant="subtitle1">
        Enjoy your days with material-ui
      </Typography>
      <ButtonStyleed/>
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Account" />
          </Grid>
        </Grid>
      </div>
      <Checkboxe/>
      <ButtonGroup>
          <Button
            startIcon={<SaveIcon/>}
            variant="contained"
            color="primary">
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon/>}
            variant="contained"
            color="secondary">
            Discard
          </Button>
      </ButtonGroup>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
