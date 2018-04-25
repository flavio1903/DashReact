import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';
import Adopcion from './screens/Adopcion/index';
import { Route } from 'react-router';
import Radium from "radium";
import styles from './styles.js';

class Dashboard extends React.Component {

  constructor(props) {
    super();
    this.state = {
      open: window.innerWidth > 991,
      manual_toggle : false,
      drawer_docked: window.innerWidth > 991,
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  toggleSidebar = () => {
    this.setState({open: !this.state.open});
    this.setState({manual_toggle: true});
  }

  handleSidebar = (isNotMobile) => {
    if(!this.state.manual_toggle){
      this.setState({open: isNotMobile});
    }
    this.setState({drawer_docked: isNotMobile});
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    this.handleSidebar(this.state.width > 991);
  };

  render() {
    return (
      <div>
        <Header
          open={this.state.open}
          toggleSidebar={this.toggleSidebar}
        />
        <Sidebar 
          open={this.state.open}
          drawer_docked={this.state.drawer_docked}
          handleToggle={this.toggleSidebar}
        />
        <div style={[
          styles.content,
          (this.state.open) ? styles.pushed : {}
        ]}>
            <Route path="/" component={Adopcion}/>
        </div>
      </div>
    );
  }
}

export default Radium(Dashboard);