import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AlertDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    const {handleSubmit,orders} = this.props;
    if(orders.length === 0) return;
    // if(orders.length !== 1) return; // 주문이 한개일때만 들어가도록 함. 악의적으로 여러 주문넣는거 막기 
    handleSubmit();

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
          color="primary"
          onClick={this.handleClickOpen}
          style={{
            backgroundColor: "#FFCD00",
            color: "#1E1E1E",
            "&:hover": {
              backgroundColor: "#ffd62b",
              color: "#1E1E1E"
            }
          }
          }
          // className={classes.paymentButton}
        >
          카카오페이로 결제
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

export default AlertDialog;
