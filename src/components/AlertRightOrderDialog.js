import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter } from 'react-router-dom';


class AlertRightOrderDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSubmitAndClose = () => {

    const {menu, hotice, count, handleCreateAndOrder,history,handleRenewOrders } = this.props;
    handleCreateAndOrder(menu, count, hotice)

    // this.setState({ open: false });
    this.setState({ open: false }, () => {
      history.push('/pickup');
      handleRenewOrders();

    });
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
          <DialogTitle id="alert-dialog-title">{"진짜 주문하시는거죠?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              데모데이에 오신 여러분들께는 음료를 무료로 제공해드려요 +_+
              (한번에 너무 많이 주문하신건... 아니시죠..?)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="default">
              돌아가기
            </Button>
            <Button onClick={this.handleSubmitAndClose} color="default" autoFocus>
              주문하기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(AlertRightOrderDialog);
