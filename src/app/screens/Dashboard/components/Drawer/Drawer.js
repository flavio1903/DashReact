import React from 'react';
import Radium from 'radium';
import styles from './styles';

class Drawer extends React.Component {
    

    handleClick = () => {
        this.setState({open: false});
    }

    render(){
        this.state = {
            open: this.props.open
        }

        return(
            <div>
                <div style={[
                    styles.container,
                    (this.state.open) ? styles.container.opened : {}
                ]}>
                    {this.props.children}
                </div>
                <div style={[
                    styles.overlay,
                    (this.state.open) ? styles.overlay.opened : {}
                ]}
                onClick={this.handleClick}></div>
            </div>
        )
    }
}

export default Radium(Drawer);