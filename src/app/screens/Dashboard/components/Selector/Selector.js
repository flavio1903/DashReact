import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles';

const items = [];

var stylesSelector = {
    style: styles.classicMode.style,
    underlineStyle: styles.classicMode.underlineStyle,
    menuStyle: styles.classicMode.menuStyle,
    labelStyle: styles.classicMode.labelStyle,
    iconStyle: styles.classicMode.iconStyle
};

for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class Selector extends React.Component {
    state = {
        value: 10
    };
    
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
                style={stylesSelector.style}
                underlineStyle={stylesSelector.underlineStyle}
                menuStyle={stylesSelector.menuStyle}
                labelStyle={stylesSelector.labelStyle}
                iconStyle={stylesSelector.iconStyle}
              >
                {items}
              </SelectField>
            </MuiThemeProvider>
        )
    }
}