import React from 'react';
import Radium from 'radium';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import styles from './styles';

class DataBox extends React.Component {
    render(){
        if(this.props.data){
            return(
                <div style={[
                    styles.base,
                    (this.props.color) ? styles[this.props.color] : styles.white
                ]}>
                    <Row>
                    {
                        this.props.data.map((data_info, i) =>  {
                            return(
                                <Col key={i} xs={12 / this.props.data.length}>
                                    <div>{data_info.title}</div>
                                    <div>{data_info.value}</div>
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