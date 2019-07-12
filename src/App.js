import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Menu from "./routes/Menu";
import Home from "./routes/Home";
import KakaoLogin from "./routes/KakaoLogin";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Pickup from "./routes/Pickup";
import MyPage from "./routes/MyPage";
import { postMenu, postToken } from "../src/lib/api";
import ShoppingList from "./routes/ShoppingList";

import "./App.css";

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
    const result = this.state.orders
      // TODO: order.name이 아닌 제품 ID를 보내줘야함
      .map(order => `${order.name},${order.count}`)
      .join(";");
    console.log(result);
  };

  handleCreate = (menu, count, hotice) => {
    console.log(menu, count, hotice);
    const { orders } = this.state;
    this.setState({
      orders: orders.concat({
        id: orders.length,
        count,
        name: menu.name,
        price: menu.price,
        semiTotal: menu.price * count,
        hotice
      }),
      total: menu.price * count
    });
    // postMenu(this.state);
  };

  handleSuccessLogin = res => {
    console.log(123, res);
    this.setState(() => ({
      user: res
    }));
    // postToken(auth)
  };

  render() {
    console.log("App render(), state: %o", this.state);
    const { user } = this.state;

    return (
      <div className="App">
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
              render={props => <Menu onCreate={this.handleCreate} {...props} />}
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
            <Route path="/mypage/"render={() => <MyPage />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
