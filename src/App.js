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
import axios from "axios";
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
    orders: [],
    id: 0 //local에서 주문번호를 위한 변수
  };

  handleChangeOrders = orders => {
    this.setState({
      orders
    });
  };

  handleSubmit = () => {
    axios.defaults.headers.common["Authorization"] =
      "JWT " + this.state.user.data.token;

    const result = this.state.orders
      .map(order => `${order.name},${order.count}`)
      .join(";");

    const total = this.state.orders.reduce((accum, curOrder) => {
      accum += curOrder.count * curOrder.price;
      return accum;
    }, 0);

    console.log("이런 json으로 주문이들어갑니다.", {
      order: result,
      price: total
    });

    // http://coffee-remocon-dev2.ap-northeast-2.elasticbeanstalk.com/
    axios
      .post(
        // `http://coffee-remocon-dev2.ap-northeast-2.elasticbeanstalk.com/order`,
        `http://ec2-13-125-149-154.ap-northeast-2.compute.amazonaws.com:8000/order/`,
        {
          order: result,
          price: total
        }
      )
      .then(function(response) {
        console.log("서버에 주문이 들어오고 받온 결과: ", response);
        //카카오페이 접속
        // debugger
        // 이게 잘못된건가? 302만 받으면 자동적으로 리다이렉션 시켜준다는데
        window.location.replace(response.data.url);


      })                              
      .catch(function(error) {
        console.log(error);
      });
  };

  handleRemove = id => {
    const { orders } = this.state;
    this.setState({
      orders: orders.filter(order => order.id !== id)
    });
  };

  handleCreate = (menu, count, hotice, image) => {
    const { orders } = this.state;
    this.setState((state, props) => ({
      orders: orders.concat({
        id: this.state.id++,
        count,
        name: menu.name,
        price: menu.price,
        semiTotal: menu.price * count,
        hotice,
        image: menu.image
      })
    }));
  };

  handleSuccessLogin = res => {
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
              render={props => (
                <Menu {...this.state} onCreate={this.handleCreate} {...props} />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <ShoppingList
                  {...this.state}
                  handleChangeOrders={this.handleChangeOrders}
                  handleSubmit={this.handleSubmit}
                  handleRemove={this.handleRemove}
                />
              )}
            />
            <Route path="/pickup" render={() => <Pickup {...this.state} />} />
            <Route path="/cafes/" render={() => <Cafes {...this.state} />} />
          </div>
        </Router>
        <GlobalThemeProvider />
      </div>
    );
  }
}

export default withStyles(styles)(App);
