import React from 'react';
import Radium, {Style} from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Drawer from 'material-ui/Drawer';
import Drawer from '../../components/Drawer/Drawer';
import {List, ListItem} from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaHeadphones from 'react-icons/lib/fa/headphones';
import FaCogs from 'react-icons/lib/fa/cogs';
import FaGroup from 'react-icons/lib/fa/group';
import FaPowerOff from 'react-icons/lib/fa/power-off';

import styles from './styles';
import links from './links';

const createListDesktop = (node, index) => {
  var children = [];

  if(node.items){
    children = node.items.map(
      (node, i) => createListDesktop(node, i)
    );
  }

  const item = (
    <ListItem
      key={index}
      primaryText={(node.text) ? node.text : null}
      containerElement={(node.link) ? <Link to={node.link}/> : 'span'}
      leftIcon={(node.icon) ? node.icon :  null}
      primaryTogglesNestedList={true}
      nestedItems={children}
    />
  );

  return item;
};

const createListMobile = (node, index, firstLoop) => {
  var children = null;

  if(node.items){
    children = node.items.map(
      (node, i) => createListMobile(node, i, false)
    );
  }

  const item = (
    <MenuItem
      key={index}
      primaryText={(node.text && !firstLoop) ? node.text : null}
      leftIcon={(node.icon) ? node.icon :  null}
      insetChildren={true}
      menuItems={children}
    />
  );

  return item;
};


const MenuDesktop = ({links}) => (
  <div>
    <List>
      {links.map(
        (node, i) => createListDesktop(node, i)
      )}
    </List>
  </div>
);

const MenuMobile = ({links}) => (
  <div>
    <Menu style={styles.menu.mobile} menuItemStyle={styles.menu.mobile.item}>
      {links.map(
        (node, i) => createListMobile(node, i, true)
      )}
    </Menu>
  </div>
); 

class SideBar extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Drawer 
            containerStyle={(!this.props.open) ? styles.drawerClosed : {}}
            open={this.props.open}
            docked={this.props.drawer_docked}
            onRequestChange={this.props.handleToggle}
          >
            <Logo styles={{backgroundColor: '#333', height:'50px'}}/>
          
            {(window.innerWidth < 992 || this.props.open) ? 
              <MenuDesktop links={links}/>
            :
              <MenuMobile links={links}/>
            }
          </Drawer>
        </MuiThemeProvider>
    </div>
    );
  }
}


export default Radium(SideBar);