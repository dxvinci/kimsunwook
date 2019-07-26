import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { ListItemSecondaryAction } from "@material-ui/core";
import CustomizedDialogDemo from "./CustomizedDialogDemo";
// import Divider from '@material-ui/core/Divider';
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper
  },
  list: {
    height: "15vh"
  }
});

// menu.image require로 가져와야하는 문제 DB에서 이미지 직접 넣어줄테니..
function ButtonWithFolderList(props) {
  const { menus, classes, onCreate } = props;
  return menus.length !== 0 ? (
    <div className={classes.root}>
      <List component="nav" className={classes.list}>
        {menus.map((menu, idx) => {
          return (
            <ListItem key={menu.name} button className={classes.list}>
              <Avatar alt="coffee Image" src={menu.image} />
              <ListItemText primary={menu.name} />
              <ListItemSecondaryAction>
                <CustomizedDialogDemo menu={menu} onCreate={onCreate} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography>이번 데모데이에서는 메뉴가 한정되어 있어요 ㅠ.ㅠ</Typography>
    </div>
  );
}

ButtonWithFolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonWithFolderList);
