import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col, Label } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
    display: 'flex'
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ffcccc',
  },
  labelStyle: {
    color: 'black',
    transform: 'rotate(-90deg)'
  },
};

class ToggleVar extends React.Component {
  constructor() {
    super();
  }

  handleToggle() {
      this.props.toggle(
      this.props.name || '',
      this.props.pinType || '',
      this.props.pin,
      !this.props.toggled
    );
  }
  render() {
    return (
      <Div>
        <MuiThemeProvider>
          <div style={styles.block}>
            <Toggle
              label={this.props.label}
              thumbStyle={styles.thumbOff}
              trackStyle={styles.trackOff}
              thumbSwitchedStyle={styles.thumbSwitched}
              trackSwitchedStyle={styles.trackSwitched}
              labelStyle={styles.labelStyle}
              onToggle={this.handleToggle.bind(this)}
            />
          </div>
         </MuiThemeProvider>
      </Div>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});


export default connect(mapStateToProps)(ToggleVar);
