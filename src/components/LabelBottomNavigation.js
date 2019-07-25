import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";
// import { Icon } from "react-icons-kit";
// import { shop } from "react-icons-kit/entypo/shop";
import Badge from "@material-ui/core/Badge";

const styles = theme => ({
  root: {
    height: "56px",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    boxSizing: "border-box",
    width: "100%",
    boxShadow: "6px -2px 5px rgba(0, 0, 0, 0.1)"
  },
  button: {
    color: "#1E1E1E",
    boxSizing: "border-box"
  },
  hoveredStyle: {
    cursor: "initial"
  },
  badge: {
    color: "#1E1E1E",
    boxSizing: "border-box"
  }
});

class LabelBottomNavigation extends React.Component {
  state = {
    invisible: false
  };

  // handleBadgeVisibility = () => {
  //   this.setState(prevState => ({ invisible: !prevState.invisible }));
  // };
  render() {
    const { classes, orders } = this.props;
    const { invisible } = this.state;

    return (
      <BottomNavigation className={classes.root}>
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
            <Badge
              className={classes.badge}
              badgeContent={orders ? orders.length : 0}
              color="secondary"
            >
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
          icon={<ListIcon/>}
          className={classes.button}
        />
        {/* <BottomNavigationAction
          component={Link}
          to="/cafes"
          label="Cafes"
          value="otherCafe"
          icon={<Icon icon={shop} size={20} />}
          className={classes.button}
        /> */}
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);
