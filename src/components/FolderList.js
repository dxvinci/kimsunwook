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
import { Icon } from 'react-icons-kit'
import {won} from 'react-icons-kit/fa/won'


const styles = theme => ({
  folderList: { 
    width: "100%",
    height: "79vh",

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
  total:{
    // 바텀네비게이션이 먹는 부분 제대로 리팩토링할것 
    height: "12vh"
  },
  listItem :{
    height: "15vh"
  }
});



class FolderList extends React.Component {
  handleButtonClick = (id, count) => {
    const { handleUpdateOrders } = this.props;
    return () => {
      console.log("메뉴 ID",id, "갯수",count);
      handleUpdateOrders(id, count);
    };
  };
  render() {
    const { classes, orders, handleSubmit } = this.props;
    const totalPrice = orders.reduce((accum, curOrder) => {
      accum += curOrder.count * curOrder.price;
      return accum;
    }, 0);
    return (
      <div>
        <List className={classes.folderList}>
          {orders.map(order => {
            return (
              <div key={order.id+order.name}>
                <ListItem key={order.id+order.name} className={classes.listItem}>
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
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
        <ListItem className={classes.total}>
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
    );
  }
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
