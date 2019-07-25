import React, { Component } from "react";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import SimpleCard from "../components/SimpleCard";
import { Redirect } from "react-router-dom";
import SimpleExpansionPanels from "../components/SimpleExpansionPanels";
import SimpleAppBar from "../components/SimpleAppBar";

class Cafes extends Component {
  render() {
    const { user, orders } = this.props;

    const contents = {
      padding: "70px 0px",
      height: "90vh",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div>
        <SimpleAppBar title={"전체"} />
        <div style={contents}>
          {/* <SimpleCard /> */}
          <SimpleExpansionPanels />
        </div>
        {/* <LabelBottomNavigation /> */}
        <LabelBottomNavigation orders={orders} />
      </div>
    );
  }
}

export default Cafes;
