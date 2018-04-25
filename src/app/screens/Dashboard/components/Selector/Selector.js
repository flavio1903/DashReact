import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];

for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class Selector extends React.Component {

    state = {
        value: 10,
    };
    
    handleChange = (event, index, value) => {
        this.setState({value});
    };

    render(){
        return(
            <MuiThemeProvider>
              <SelectField
                value={this.state.value}
                onChange={this.handleChange}
                maxHeight={200}
              >
                {items}
              </SelectField>
            </MuiThemeProvider>
        )
    }
}