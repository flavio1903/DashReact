import React from 'react';
import ChartistGraph from 'react-chartist';
import styles from './styles.js';
 
class ChartPie extends React.Component {
  render() {
 
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, 10, 3, 2, 5, 8]
      ]
    };
 
    var options = {
      high: 10,
      low: 0,
      height: 300,
      showArea: true,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };
 
    var type = 'Line'
 
    return (
      <div style={
        (this.props.size) ? styles.medium : {}
      }>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

export default ChartPie;