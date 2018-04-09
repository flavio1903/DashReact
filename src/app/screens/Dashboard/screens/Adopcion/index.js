import React from 'react';
import PieChart from '../../components/ChartPie/ChartPie';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';

class Adopcion extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PieChart />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            asdasd
          </Col>
          <Col xs={12} md={4}>
            bbbbbb
          </Col>
          <Col xs={12} md={4}>
            cccccc
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Adopcion;