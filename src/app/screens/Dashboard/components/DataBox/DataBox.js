import React from 'react';
import Radium from 'radium';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import styles from './styles';

import FaStar from 'react-icons/lib/fa/star';
import FaUser from 'react-icons/lib/fa/user';

class DataBox extends React.Component {
    render(){
        if(this.props.data){
            return(
                <div style={styles.base}>
                    <Row styles={styles.row}>
                    {
                        (this.props.icon != null) ? <div style={[styles.icon,
                            (this.props.styles) ? this.props.styles : {}]}>
                            {(this.props.icon) ? this.props.icon : ''}
                        </div> : ''
                    }
                    {
                        this.props.data.map((data_info, i) =>  {
                            return(
                                <Col key={i} xs={12 / this.props.data.length}>
                                    {(data_info.title != null) ? <div style={styles.title} dangerouslySetInnerHTML={{__html:data_info.title}}/> : ''}
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