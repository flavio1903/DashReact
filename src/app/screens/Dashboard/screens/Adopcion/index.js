import React from 'react';
import PieChart from '../../components/ChartPie/ChartPie';

class Adopcion extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <PieChart />
          </div>
        </div>
      </div>
    );
  }
}

export default Adopcion;