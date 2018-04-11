import React from 'react';
import styles from './styles.js';

class Title extends React.Component {
    render(){
        return (
            <h1 style={styles.title}>
                {this.props.children}
            </h1>
        )
    }
}

export default Title;