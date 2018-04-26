import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import styles from './styles';

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

class DateRange extends React.Component {
    constructor(props) {
        super(props);

        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        this.state = {
            minDate: minDate,
            maxDate: maxDate,
            autoOk: false,
            disableYearSelection: false,
        };
    }

    handleChangeMinDate = (event, date) => {
        this.setState({
            minDate: date,
        });
    };

    handleChangeMaxDate = (event, date) => {
        this.setState({
            maxDate: date,
        });
    };

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <DatePicker
                        onChange={this.handleChangeMinDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Desde"
                        defaultDate={this.state.minDate}
                        disableYearSelection={this.state.disableYearSelection}
                        style={styles.input}
                    />
                    <DatePicker
                        onChange={this.handleChangeMaxDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Hasta"
                        defaultDate={this.state.maxDate}
                        disableYearSelection={this.state.disableYearSelection}
                        style={styles.input}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default DateRange;