import React, { Component } from "react";
import FolderList from "../components/FolderList";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import {Redirect} from 'react-router-dom';


class ShoppingList extends Component {
  handleUpdateOrders = (id, count) => {
    const { orders, handleChangeOrders } = this.props;
    // id와 changedCount를 받아서 orders 배열에서 id에 맞는 부분의 count를 수정한다.
    // 변경된 orders 를 handldeChangeOrders 함수로 App에 전달한다.
    if(count === 0) return 
    const newOrders = orders.map(order =>
      id === order.id ? { ...order, count } : order
    );
    handleChangeOrders(newOrders);
  };

  render() {
    const { user,orders, handleSubmit } = this.props;
    const shoppinglist = {
      // display:'flex',
    };
    console.log("장바구니에 전달된 주문", orders);

    return (
      <div style={shoppinglist}>
        {/* <FolderList onCreate={onCreate} category="Coffee" menus={menus.filter(menu=>menu.category === 'Coffee')}/> */}
        <FolderList
          orders={orders}
          handleUpdateOrders={this.handleUpdateOrders}
          handleSubmit={handleSubmit}
        />
        <LabelBottomNavigation />
      </div>
    ) 
  }
}

export default ShoppingList;
