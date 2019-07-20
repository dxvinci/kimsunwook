import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { shop } from "react-icons-kit/entypo/shop";

import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const styles = theme => ({
  root: {
    height: "10vh",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    boxSizing: "border-box",
    width: "100%",
    // margin: theme.spacing(2)
  },
  button: {
    color: "#1E1E1E",
    boxSizing: "border-box"
  },
  hoveredStyle: {
    cursor: "initial"
  },
  badge: {
    // padding: theme.spacing(0, 2),
    color: "#1E1E1E",
    boxSizing: "border-box"
  }
});

class LabelBottomNavigation extends React.Component {
  // state = {
  //   value: "menu"
  // };

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  render() {
    const { classes } = this.props;
    // const { value } = this.state;
    

    return (
      <BottomNavigation
        // value={value}
        // onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/menu"
          label="Menu"
          value="Menu"
          icon={<LocalDrinkIcon />}
          className={classes.button}
        />
        <BottomNavigationAction
          component={Link}
          to="/cart"
          label="Cart"
          value="Cart"
          icon={
            <Badge className={classes.badge} badgeContent={1} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          }
          // className={classes.button}
        />
        <BottomNavigationAction
          component={Link}
          to="/pickup"
          label="Pickup"
          value="Pickup"
          icon={<ReceiptIcon />}
          className={classes.button}
        />
        <BottomNavigationAction
          component={Link}
          to="/cafes"
          label="Cafes"
          value="otherCafe"
          icon={<Icon icon={shop} size={20} />}
          className={classes.button}
        />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);
