import React from 'react';
import Radium from 'radium';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import styles from './styles';

import FaAndroid from 'react-icons/lib/fa/android';
import FaApple from 'react-icons/lib/fa/apple';
import FaUser from 'react-icons/lib/fa/user';
import FaStar from 'react-icons/lib/fa/star';

class DataBox extends React.Component {
    render(){
        if(this.props.data){
            return(
                <div style={styles.base}>
                    <Row styles={styles.row}>
                    {
                        (this.props.icon != null) ? <div style={styles.icon}>
                            {(this.props.icon === 'android') ? <FaAndroid/> : ''}
                            {(this.props.icon === 'ios') ? <FaApple/> : ''}
                            {(this.props.icon === 'user') ? <FaUser/> : ''}
                        </div> : ''
                    }
                    {
                        this.props.data.map((data_info, i) =>  {
                            return(
                                <Col key={i} xs={12 / this.props.data.length}>
                                    {(data_info.title != null) ? <div style={styles.title}>{data_info.title}</div> : ''}
                                    {(data_info.value != null) ? <div style={styles.value}>{data_info.value}</div> : ''}
                                    {(data_info.review) ? <div style={styles.stars}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div> : ''}
                                    {(data_info.total != null) ? <div style={styles.total}><FaUser/> {data_info.total} en total</div> : ''}
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>
            )
        }

        return null
    }
}

export default Radium(DataBox);