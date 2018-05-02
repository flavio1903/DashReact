import React from 'react';
import Radium from "radium";
import styles from './styles';

import userAvatar from '../../../../assets/images/user.jpg';

class Avatar extends React.Component {
    render(){
        return(
            <div>
                <div style={[
                    styles.avatar,
                    {backgroundImage: 'url('+userAvatar+')'}
                ]}/>
                <div style={styles.username}>
                    
                </div>
            </div>
        )
    }
}

export default Radium(Avatar);