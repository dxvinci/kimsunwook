import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    // position: "fixed",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    // height: "7vh",
  },
  panel: {
    height:"56px",
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.panel} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>교환 환불 규정</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            본 서비스에서 제공하는 제품은 식품으로 함량, 용량부족, 부패변질,
            유통기한 경과, 이물 혼입 등의 문제 발생 시 구입 매장에서 당일 제품
            교환 또는 구입가 환불이 가능합니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.panel} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>사업자 정보 확인</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            주소: 서울시 성동구 상원1길 25 SOL빌딩 4층 4204호 대표: 강재윤
            전화번호 : 없음 사업자등록번호 : 390-86-01376
          </Typography>
        </ExpansionPanelDetails>
        {/* </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Disabled Expansion Panel
          </Typography>
        </ExpansionPanelSummary> */}
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.panel} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            타 카페와 제휴계획
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>다른 카페들과의 제휴는 아직 준비중 입니다!</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
