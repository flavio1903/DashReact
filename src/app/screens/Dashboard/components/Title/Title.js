import React from 'react';
import styles from './styles.js';

class Title extends React.Component {
    render(){
        return (
            <div style={styles.title}>
                {this.props.children}
            </div>
        )
    }
}

export default Title;