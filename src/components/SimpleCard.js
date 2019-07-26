import React,  { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import Waiting from '../assets/Waiting.png'
import bartender from "../assets/bartender.png";
import comingsoon from "../assets/comingsoon.png";
import axios from "axios";


class SimpleCard extends Component {
    state = {
        myOrder: []
      };

      componentDidMount() {
        axios.get(`http://coffee-remocon-dev2.ap-northeast-2.elasticbeanstalk.com/order/`)
          .then(res => {
            console.log('order를 가져온 결과',res);
            // 우선은 가장 최근의 주문만 가져오도록 하였는데 
            const latest = res.data.length;
            const myOrder = res.data[latest-1];
            this.setState({ myOrder });
          })
          .catch(function (error) {
            console.log(error);
          });
        
    
        // 서버연결안되었을시 받아온 fetchedMenus
      }

render(){
    const cardStyle = {
        textAlign: "center",
        height: "90vh",
        boxSizing: "border-box"
      };
    const {user, orders} = this.props;
    
      return orders ? (
        <Card style={cardStyle}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              COFFEE SQUARE
            </Typography>
            <Divider />
            <br />
    
            <Typography variant="h5" component="h2">
              안녕하세요 {user.data.user.username}님!
            </Typography>
            <img src={bartender} width="100" />
    
            {/* <Divider /> */}
            <Typography>맛있는 커피가 준비되고 있어요!</Typography>
            <br />
            <Typography>주문 번호 {this.state.myOrder.id}</Typography>
            <Typography>주문 목록</Typography>
            <Typography color="textSecondary">
              {/* {`${orders.map(order => order.name)}`} */}
              {this.state.myOrder.order}
            </Typography>
            {/* <Typography variant="body2" component="p">
              {"예상 소요시간 5분"}
            </Typography> */}
          </CardContent>
          {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
        </Card>
      ) : (
        <Card style={cardStyle}>
          <CardContent>
            <img src={comingsoon} width="300" />
            <Typography>다른 카페들과의 제휴는 아직 준비중 입니다!</Typography>
          </CardContent>
          {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
      );
}

}

export default SimpleCard;
