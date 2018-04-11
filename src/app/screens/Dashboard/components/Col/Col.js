import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import styles from './styles.js';

class Col extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

    render(){
        return (
            <div style={[
                styles.base,
                (this.props.xs) ? styles['xs' + this.props.xs] : {},
                (this.props.sm) ? styles['sm' + this.props.sm] : {},
                (this.props.md) ? styles['md' + this.props.md] : {},
                (this.props.lg) ? styles['lg' + this.props.lg] : {},
                (this.props.style) ? this.props.style : {}
            ]}>
                {this.props.children}
            </div>
        )  
    }
}

Col.propTypes = {
    xs: PropTypes.number
};

export default Radium(Col);