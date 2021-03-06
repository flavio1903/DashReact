import React from 'react';
import ChartPie from '../../components/ChartPie/ChartPie';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Title from '../../components/Title/Title';
import DataBox from '../../components/DataBox/DataBox';
import DateRange from '../../components/DateRange/DateRange';
import Selector from '../../components/Selector/Selector';
import styles from './styles';

import FaAndroid from 'react-icons/lib/fa/android';
import FaApple from 'react-icons/lib/fa/apple';
import FaUser from 'react-icons/lib/fa/user';

class Adopcion extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Title>Adopcion</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Selector classicMode={true} />
          </Col>
          <Col xs={12} md={6}>
            <DateRange style={styles.inputs} underlineStyle={styles.inputs.nounderline}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div style={styles.box}>
              <ChartPie size="medium"/>
            </div>
          </Col>
        </Row>

        <Row></Row>

        <Row>
          <Col xs={12} md={4}>
            <DataBox 
              data={[
                {value: '356', title: 'Usuarios registrados <br>(en el período)'},
              ]}
            />
          </Col>
          <Col xs={12} md={4}>
            <DataBox 
              styles={styles.android}
              icon={<FaAndroid/>}
              data={[
                {value: '250', title: 'Descargas'},
                {value: '4.3', review: true, total: '501'}
              ]}
            />
          </Col>
          <Col xs={12} md={4}>
          <DataBox 
              styles={styles.ios}
              icon={<FaApple/>}
              data={[
                {value: '255', title: 'Descargas'},
                {value: '4', review: true, total: '200'}
              ]}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Adopcion;