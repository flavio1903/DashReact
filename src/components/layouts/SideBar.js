import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideBar extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <MuiThemeProvider>
            <Drawer 
              className="sidebar"
              open={this.props.open}
              docked={this.props.drawer_docked}
              onRequestChange={this.props.handleToggle}
            >
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
          </MuiThemeProvider>
      </div>
      );
    }
  }