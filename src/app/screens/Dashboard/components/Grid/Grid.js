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
                {this.props.children}
            </div>
        )  
    }
}

export default Grid;