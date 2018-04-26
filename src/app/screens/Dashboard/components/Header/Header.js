import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Radium from "radium";
import styles from './styles.js'

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
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
 
export default Radium(Header);