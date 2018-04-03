import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import '../../styles/header.css'
 
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
        <MuiThemeProvider>
          <AppBar 
            className = "header"
            onLeftIconButtonClick = {this.props.handleClick}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
 
export default Header;