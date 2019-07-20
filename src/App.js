import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Menu from "./routes/Menu";
import Home from "./routes/Home";
import KakaoLogin from "./routes/KakaoLogin";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Pickup from "./routes/Pickup";
import Cafes from "./routes/Cafes";
import ShoppingList from "./routes/ShoppingList";
import axios from 'axios'
import GlobalThemeProvider from "./customize/GlobalThemeProvider";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
});

class App extends Component {
  state = {
    user: undefined,
    orders: []
  };

  handleChangeOrders = orders => {
    this.setState({
      orders
    });
  };

  handleSubmit = () => {
    console.log("this.state", this.state)
    axios.defaults.headers.common['Authorization'] = 'JWT ' +this.state.user.data.token;

    const result = this.state.orders
      .map(order => `${order.name},${order.count}`)
      .join(";");

    console.log("주문이들어갑니다.",result,this.state.total)
    
      axios.post(`http://ec2-13-125-149-154.ap-northeast-2.compute.amazonaws.com:8000/order/`, {
        order: result,
        price: this.state.total,
      })
      .then(function (response) {
        console.log("서버에 들어간 주문",response);
        //카카오페이 접속
        window.location.replace(response.data.url);

      })
      .catch(function (error) {
        console.log(error);
      });


    
  };

  // handleRemove

  handleCreate = (menu, count, hotice, image) => {
    console.log(menu, count, hotice);
    const { orders } = this.state;
    this.setState({
      orders: orders.concat({
        id: orders.length,
        count,
        name: menu.name,
        price: menu.price,
        semiTotal: menu.price * count,
        hotice,
        image: menu.image
      }),
      total: menu.price * count
    });
  };

  handleSuccessLogin = res => {
    console.log(123, res);
    this.setState(() => ({
      user: res
    }));
  };

  render() {
    console.log("App render(), state: %o", this.state);
    const { user } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GlobalThemeProvider />
        <Router>
          <div>
          <Route
            exact
            path="/"
            render={routeProps => {
              return user === undefined ? (
                <KakaoLogin
                  handleSuccessLogin={this.handleSuccessLogin}
                  {...routeProps}
                />
              ) : (
                <Redirect to="/menu" />
              );
            }}
          />
            <Route
              path="/menu"
              render={props => <Menu  {...this.state} onCreate={this.handleCreate} {...props} />}
            />
            <Route
              path="/cart"
              render={() => (
                <ShoppingList
                  {...this.state}
                  handleChangeOrders={this.handleChangeOrders}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route path="/pickup" render={() => <Pickup {...this.state} />} />
            <Route path="/cafes/"render={() => <Cafes />} />
          </div>
        </Router>
        <GlobalThemeProvider />
      </div>
    );
  }
}

export default withStyles(styles)(App);