import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/SideBar';
import './styles/main.css'

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      open: window.innerWidth > 991,
      manual_toggle : false,
      appbar_class : window.innerWidth > 991 ? 'sidebar_opened' : 'sidebar_closed',
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

  handleToggle = () => {
    this.setState({open: !this.state.open});
    this.setState({manual_toggle: true});
    if(!this.state.open){
      this.setState({appbar_class: 'sidebar_opened'});
    }else{
      this.setState({appbar_class: 'sidebar_closed'});
    }
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
      <div className = {this.state.appbar_class}>
        <Header handleClick={this.handleToggle}/>
        <Sidebar open={this.state.open} drawer_docked={this.state.drawer_docked} handleToggle={this.handleToggle}/>
        <div className="content">
          asdsadsadsa
        </div>
      </div>
    );
  }
}

export default App;