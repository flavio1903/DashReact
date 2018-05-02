import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Radium from "radium";
import styles from './styles.js'
import Avatar from '../Avatar/Avatar'

import FaEnvelope from 'react-icons/lib/fa/envelope';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div style={[
        styles.base,
        (this.props.open) ? styles.pushed : styles.pulled
      ]}>
        <MuiThemeProvider>
          <AppBar 
            onLeftIconButtonClick={this.props.toggleSidebar}
          >
            <div>
              <div></div>
              <div>
                <FaEnvelope/>
              </div>
              <div>
                <Avatar/>
              </div>
            </div>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
 
export default Radium(Header);