import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaUser from 'react-icons/lib/fa/user';
import FaCogs from 'react-icons/lib/fa/cogs';
import FaGroup from 'react-icons/lib/fa/group';
import FaPowerOff from 'react-icons/lib/fa/power-off';

export default class SideBar extends React.Component {
    render() {
      return (
        <div>
          <MuiThemeProvider>
            <Drawer 
              open={this.props.open}
              docked={this.props.drawer_docked}
              onRequestChange={this.props.handleToggle}
            >
              <MenuItem>
                <Link to="/adopcion">Adopcion</Link>
              </MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
          </MuiThemeProvider>
      </div>
      );
    }
  }