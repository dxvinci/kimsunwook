import React, { Component } from 'react';
import axios from 'axios'
import data from '../data/menu.json';
import { withStyles } from "@material-ui/core/styles";

// import { postMenu } from '../lib/api';

import ScrollableTabsButtonAuto from '../components/ScrollableTabsButtonAuto'
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import {Redirect} from 'react-router-dom'

class Menu extends Component {
  state = {
    menus: [],
  };




  // http://ec2-13-209-76-67.ap-northeast-2.compute.amazonaws.com:8000/menu
  // 서버에서 메뉴 목록 가져오기 
  componentDidMount() {
    // axios.get(`http://127.0.0.1:8000/menu/`)
    // // axios.get(`http://localhost:3000/src/data/menu.json`)
    // // fetch('../data/menu.json')
    //   .then(res => {
    //     console.log('메뉴를 가져온 결과');
    //     const menus = res.data;
    //     this.setState({ menus });
    //     console.log(menus);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
      const menus = [
        {
            "name": "아메리카노",
            "price": "1800",
            "image": require("../assets/americano.png"),
            "category": "Coffee"
        },
        {
            "name": "에스프레소",
            "price": "1500",
            "image": require("../assets/espresso.png"),
            "category": "Coffee"
        },
        {
            "name": "카페라떼",
            "price": "2500",
            "image": require("../assets/caffeLatte.png"),
            "category": "Coffee"
        },
        {
            "name": "카푸치노",
            "price": "2500",
            "image": require("../assets/caphuchino.png"),
            "category": "Coffee"
        },
        {
            "name": "바닐라라떼",
            "price": "3000",
            "image": require("../assets/vanillaLatte.png"),
            "category": "Coffee"
        }
    ]
    this.setState({ menus });

      
  }

  render() {
    const { user, onCreate } = this.props;
    const tabs ={
      height:"90vh"
    }
    
    return  (
      <div>
        <div style={tabs}>
        <ScrollableTabsButtonAuto
          // style={{ height: "90%" }}
          menus={this.state.menus} 
          onCreate={onCreate} 
        />
        </div>
        <LabelBottomNavigation
        // style={{ height: "10%" }}
        />
      </div>
    ) 
  }
}

export default Menu;


