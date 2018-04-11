import React from 'react';
import styles from './styles.js'

class Grid extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render(){
        return (
            <div style={styles.base}>
                <span style={styles.before}></span>
                {this.props.children}
                <span style={styles.after}></span>
            </div>
        )  
    }
}

export default Grid;