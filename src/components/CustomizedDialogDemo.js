import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useTheme, makeStyles } from "@material-ui/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import Grid from "@material-ui/core/Grid";
import AlertRightOrderDialog from "./AlertRightOrderDialog";

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);

const useStyles = makeStyles({
  clickButton: ({ secondary }) => ({
    backgroundColor: secondary.main
  })
});

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
    count: 1,
    hotice: "ICE"
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  // handleRightOrder = () => {
  //   const {menu, handleCreateAndOrder} = this.props
  //   handleCreateAndOrder(menu, this.state.count, this.state.hotice);
  //   this.handleClose();

  // }

  handleClose = () => {
    this.setState({
      open: false,
      count: 1
    });
  };

  handleMinusClick = () => {
    // console.log(this.state,'456');
    if (this.state.count !== 1) {
      this.setState({
        count: --this.state.count
      });
    }
  };

  handleAddClick = () => {
    // console.log(this.state,'123');
    this.setState({
      count: ++this.state.count
    });
  };

  handleShoppingListClick = () => {
    const { onCreate, menu } = this.props;
    // this.setState({ snackBarOpen: true });
    onCreate(menu, this.state.count, this.state.hotice);
    this.handleClose();
  };

  render() {
    const { menu, handleCreateAndOrder, handleRenewOrders } = this.props;
    const { hotice, count } = this.state;

    return (
      <div>
        <IconButton arial-label="Add" onClick={this.handleClickOpen}>
          <AddCircleIcon />
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {menu.name}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              <Grid container spacing={24}>
                <Grid item xs={3} />
                <Grid item xs={3}>
                  <Button
                    onClick={() => {
                      this.setState({
                        hotice: "HOT"
                      });
                    }}
                    color="secondary"
                  >
                    HOT
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    onClick={() => {
                      this.setState({
                        hotice: "ICE"
                      });
                    }}
                    color="primary"
                  >
                    ICE
                  </Button>
                </Grid>
                <Grid item xs={3} />
              </Grid>
            </Typography>
            <Typography gutterBottom>
              주문목록 {this.state.hotice}
              {menu.name}:{this.state.count}개
            </Typography>
            <Typography gutterBottom>
              총액 ￦{menu.price * this.state.count}
            </Typography>
          </DialogContent>
          <DialogActions>
            <IconButton arial-label="Minus" onClick={this.handleMinusClick}>
              <RemoveCircleIcon />
            </IconButton>
            <Typography gutterBottom>{this.state.count}</Typography>
            <IconButton arial-label="Add" onClick={this.handleAddClick}>
              <AddCircleIcon />
            </IconButton>
          </DialogActions>
          <DialogActions>
            <AlertRightOrderDialog
              handleRenewOrders={handleRenewOrders}
              handleCreateAndOrder={handleCreateAndOrder}
              menu={menu}
              hotice={hotice}
              count={count}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleShoppingListClick}
            >
              장바구니
            </Button>
            {/* <SimpleSnackbar
              isOpen={snackBarOpen}
              hotice={this.state.hotice}
              count={this.state.count}
              menu={menu}
              onCreate={onCreate}
            /> */}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;
