import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles';

const items = [];

for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class Selector extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: 10
        };
    }
    
    handleChange = (event, index, value) => {
        this.setState({value});
    };

    render(){
        return(
            <MuiThemeProvider>
              <SelectField
                floatingLabelText=" "
                value={this.state.value}
                onChange={this.handleChange}
                maxHeight={200}
                style={styles.input}
                underlineStyle={styles.underlineStyle}
                menuStyle={styles.menuStyle}
                labelStyle={styles.labelStyle}
                iconStyle={styles.iconStyle}
              >
                {items}
              </SelectField>
            </MuiThemeProvider>
        )
    }
}