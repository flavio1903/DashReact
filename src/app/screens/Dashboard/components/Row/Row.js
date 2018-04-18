import React from 'react';
import Radium from 'radium'
import styles from './styles.js'

class Row extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render(){
        return (
            <div style={[
                    styles.base, 
                    (this.props.styles != null) ? this.props.styles : {}
                ]}>
                <span style={styles.before}></span>
                {this.props.children}
                <span style={styles.after}></span>
            </div>
        )  
    }
}

export default Radium(Row);