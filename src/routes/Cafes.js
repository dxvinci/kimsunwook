import React, { Component } from 'react';
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import SimpleCard from '../components/SimpleCard'
import {Redirect} from 'react-router-dom';
import SimpleExpansionPanels from "../components/SimpleExpansionPanels";





class Cafes extends Component {
    render() {
    const { user,orders } = this.props;

    const pickup = {
        paddingTop: 16,
        height: "90vh",
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div>
            <div style={pickup}>
                <SimpleCard/>
            </div>
            {/* <LabelBottomNavigation /> */}
            <LabelBottomNavigation orders={orders}/>
            <SimpleExpansionPanels />


        </div>
    ) 
 }
}



export default Cafes;