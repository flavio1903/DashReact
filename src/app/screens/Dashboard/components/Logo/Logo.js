import React from 'react';
import Radium from "radium";
import styles from './styles.js'
import logo from '../../../../assets/images/ic_logo.png';

class Logo extends React.Component {
    
    render(){
        console.log(logo);
        return (
            <span style={[
                ((this.props.styles) ? this.props.styles: {}),
                styles.logo,
                {backgroundImage: 'url('+logo+')'}
            ]}/>
        );
    }
}

export default Radium(Logo);