import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AlertRightOrderDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    const {menu, hotice, count, handleCreateAndOrder } = this.props;
    handleCreateAndOrder(menu, count, hotice)

    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
         <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClickOpen}
            >
              바로결제
            </Button>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"주문 완료"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              데모데이에 오신 여러분들께는 음료를 무료로 제공해드려요 +_+
              (한번에 너무 많이 주문하신건... 아니시죠..?)
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

export default AlertRightOrderDialog;
