import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { ListItemSecondaryAction } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Icon } from "react-icons-kit";
import { won } from "react-icons-kit/fa/won";
import { remove } from "react-icons-kit/fa/remove";
import { cross } from "react-icons-kit/metrize/cross";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({
  folderList: {
    padding: "70px 0px", 
    width: "100%",
    // height: "77vh",

    backgroundColor: theme.palette.background.paper
  },
  paymentButton: {
    backgroundColor: "#FFCD00",
    color: "#1E1E1E",
    "&:hover": {
      backgroundColor: "#ffd62b",
      color: "#1E1E1E"
    }
  },
  total: {
    // 바텀네비게이션이 먹는 부분 제대로 리팩토링할것
    height: 60,
    position: "fixed",
    bottom : 56,
    width: "100%",
    backgroundColor: "white",
    boxShadow: "inset 0px 3px 6px 0px rgba(0, 0, 0, 0.1)" 
  },
  listItem: {
    height: "15vh"
  },
  ClearIcon: {
    top: "15%"
  }
});

class FolderList extends React.Component {
  handleButtonClick = (id, count) => {
    const { handleUpdateOrders } = this.props;
    return () => {
      console.log("메뉴 ID", id, "갯수", count);
      handleUpdateOrders(id, count);
    };
  };
  render() {
    const { classes, orders, handleSubmit,handleRemove } = this.props;
    const totalPrice = orders.reduce((accum, curOrder) => {
      accum += curOrder.count * curOrder.price;
      return accum;
    }, 0);
    return (
      <div>
        <List className={classes.folderList}>
          {orders.map(order => {
            return (
              <div key={order.id + order.name}>
                <ListItem
                  key={order.id + order.name}
                  className={classes.listItem}
                >
                  <Avatar alt="구입한 커피" src={order.image} />
                  <ListItemText
                    primary={`${order.hotice} ${order.name}`}
                    secondary={`${order.price}원`}
                  />
                  <IconButton
                    arial-label="Minus"
                    onClick={this.handleButtonClick(order.id, order.count - 1)}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                  <Typography gutterBottom>{`${order.count}`}</Typography>
                  <IconButton
                    arial-label="Add"
                    onClick={this.handleButtonClick(order.id, order.count + 1)}
                  >
                    <AddCircleIcon />
                  </IconButton>
                  <ListItemSecondaryAction 
                  className={classes.ClearIcon}
                  onClick={()=>{handleRemove(order.id)}}
                  >
                    <ClearIcon 
                    style={{ fontSize: 16 }}
                     />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
        <div className={classes.total}>
        <ListItem >
          <Icon icon={won} size={20} />
          <ListItemText primary={`총액 ${totalPrice}원`} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.paymentButton}
          >
            카카오페이로 결제
          </Button>
        </ListItem>
        </div>
      </div>
    );
  }
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
