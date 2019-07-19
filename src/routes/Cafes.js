import React, { Component } from 'react';
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import SimpleCard from '../components/SimpleCard'
import {Redirect} from 'react-router-dom';




class Cafes extends Component {
    render() {
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
            <LabelBottomNavigation />
        </div>
    ) 
 }
}



export default Cafes;