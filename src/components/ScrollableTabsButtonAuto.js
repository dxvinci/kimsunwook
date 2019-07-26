import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import ButtonWithFolderList from "./ButtonWithFolderList";
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};


// const theme = createMuiTheme({
//   palette: {
//     primary: { main: purple[500] }, // Purple and green play nicely together.
//     secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
//   },
// });


const styles = theme => ({
  root: {
    height: "90vh",
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    height: 60,
    color:  "#1E1E1E",
  }

});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, menus, onCreate } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
          <AppBar position="static" color="default" className={classes.appBar}>
          {/* <ThemeProvider theme={theme}> */}
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              className={classes.tabs}
            >
              <Tab label="coffee" className={classes.appBar} />
              <Tab label="tea" className={classes.appBar} />
              <Tab label="ice blended" className={classes.appBar} />
              <Tab label="juice" className={classes.appBar} />
              <Tab label="bubble tea" className={classes.appBar} />
            </Tabs>
            {/* </ThemeProvider> */}

          </AppBar>

        {value === 0 && (
          <TabContainer>
            <ButtonWithFolderList
              onCreate={onCreate}
              category="Coffee"
              menus={menus.filter(menu => menu.category === "Coffee")}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <ButtonWithFolderList
              onCreate={onCreate}
              category="Tea"
              menus={menus.filter(menu => menu.category === "Tea")}
            />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <ButtonWithFolderList
              onCreate={onCreate}
              category="Ice Blended"  
              menus={menus.filter(menu => menu.category === "Ice Blended")}
            />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <ButtonWithFolderList
              onCreate={onCreate}
              category="Ade"
              menus={menus.filter(menu => menu.category === "Ade")}
            />
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <ButtonWithFolderList
              onCreate={onCreate}
              category="Bubble Tea"
              menus={menus.filter(menu => menu.category === "Bubble Tea")}
            />
          </TabContainer>
        )}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
