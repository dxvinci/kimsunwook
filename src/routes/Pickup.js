import React, { Component } from 'react';
import LabelBottomNavigation from '../components/LabelBottomNavigation'
import SimpleCard from '../components/SimpleCard'
import {Redirect} from 'react-router-dom';
import { Typography } from '@material-ui/core';

class Pickup extends Component {
    state ={
        isOrdered : false
    }
    render() {
    const {user , orders, total} = this.props
    const {isOrdered} = this.state;
        const pickup = {
            paddingTop: 16,
            height: "90vh",
            justifyContent: 'center',
            alignItems: 'center',
        }
        return user ? (
            isOrdered ? (
                <div>
                <div style={pickup}>
                    <SimpleCard orders={orders}/>
                </div>
                <LabelBottomNavigation orders={orders}/>
            </div>
            ) : (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh"
                }}>
                    <Typography>주문이 없습니다!</Typography>
                    <LabelBottomNavigation orders={orders}/>

                </div>
            )
  
        ) : (
            <Redirect to="/" />
        )
    }
}

export default Pickup;