import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";

import ScrollableTabsButtonAuto from "../components/ScrollableTabsButtonAuto";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import { Redirect } from "react-router-dom";

// 서버 연결 안되었을시
import { fetchedMenus } from "../data/menu.js";

class Menu extends Component {
  state = {
    menus: []
  };

  componentDidMount() {
    // axios.get(`http://127.0.0.1:8000/menu/`)
    //   .then(res => {
    //     console.log('메뉴를 가져온 결과',res);
    //     const menus = res.data;
    //     this.setState({ menus });
    //     console.log(menus);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // this.setState({ menus});

    // 서버연결안되었을시 받아온 fetchedMenus
    this.setState({ menus: fetchedMenus });
  }

  render() {
    const { user, onCreate } = this.props;
    const tabs = {
      height: "90vh"
    };

    return user ? (
      <div>
        <div style={tabs}>
          <ScrollableTabsButtonAuto
            menus={this.state.menus}
            onCreate={onCreate}
          />
        </div>
        <LabelBottomNavigation />
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Menu;
