import React from 'react';
import PieChart from '../../components/ChartPie/ChartPie';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Title from '../../components/Title/Title';
import DataBox from '../../components/DataBox/DataBox';
import styles from './styles';

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
          <Col xs={12} style={styles.box}>
            <PieChart size="medium"/>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
          <DataBox 
              icon='android'
              data={[
                {value: '356', title: 'Usuarios registrados (en el período)'},
              ]}
            />
          </Col>
          <Col xs={12} md={4}>
            <DataBox 
              color='android'
              icon='android'
              data={[
                {value: '250', title: 'Descargas'},
                {value: '4.3', text: '501 en total', review: true}
              ]}
            />
          </Col>
          <Col xs={12} md={4}>
          <DataBox 
              color='ios'
              icon='ios'
              data={[
                {value: '255', title: 'Descargas'},
                {value: '4', text: '245 en total', review: true}
              ]}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Adopcion;