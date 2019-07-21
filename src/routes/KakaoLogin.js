import React, { Component } from "react";
import Kakao from "kakaojs";
// import home from "../assets/home.png";
// import Logo from "../assets/Logo.png";
import Main from "../assets/main.png";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

class KakaoLogin extends Component {
  componentDidMount() {
    const { handleSuccessLogin, history } = this.props;

    Kakao.init("5972de8edace2cecd92bcf4c08ce6ae0");
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: function(authObj) {
        // 로그인 성공시, API를 호출합니다.
        Kakao.API.request({
          url: "/v1/user/me",
          success: function(res) {
            console.log(res);
            // console.log("AuthToken",authObj.access_token  )
            // // 서버 연결 안되어있을때
            // handleSuccessLogin(res);

            // 백앤드 서버에 보낼떄
            axios
              .post("http://ec2-13-125-149-154.ap-northeast-2.compute.amazonaws.com:8000/rest-auth/kakao/", {
                access_token: authObj.access_token
              })
              .then(function(response) {

                console.log("access_token를 보낸 결과", response);
                handleSuccessLogin(response);
              })
              .catch(function(error) {
                console.log(error);
              });
          },
          fail: function(error) {
            alert(JSON.stringify(error));
          }
        });
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
  }
  render() {
    const kakaoStyle = {
      height: 640,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      // justifyContent: 'center',
      alignItems: "center"
    };
    return (
      <div className="KakaoLogin" style={kakaoStyle}>

        <div>
          <img src={Main} />
        </div>
        <div>
          <a id="kakao-login-btn" />
        </div>
      </div>
    );
  }
}

export default KakaoLogin;
