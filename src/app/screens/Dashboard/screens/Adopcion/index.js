import React from 'react';
import PieChart from '../../components/ChartPie/ChartPie';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import Title from '../../components/Title/Title';
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
          <Col xs={12} md={4} style={styles.box}>
            <DataBox/>
          </Col>
          <Col xs={12} md={4} style={styles.box}>
            bbbbbb
          </Col>
          <Col xs={12} md={4} style={styles.box}>
            cccccc
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Adopcion;