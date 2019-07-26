import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 100,
    // paddingRight: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    position: "fixed",
    right: 8
  },
};

function SimpleAppBar(props) {
  const { classes, title } = props;

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit"  className={classes.grow}>
            {title}
          </Typography>
          <IconButton   className={classes.menuButton} color="inherit">
            <MailIcon onClick={()=>{window.location.replace('https://docs.google.com/forms/d/11x4APFKM3M5W-95BsR2njpoCfBGHzsf-9jxrl0C2x5M/edit')}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
