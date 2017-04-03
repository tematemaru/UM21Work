import React from 'react';
import { connect } from 'react-redux';
import { Div, SubDiv, Col } from './style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PinCheckBox from 'components/PinCheckBox/index.js';
import ToggleVar from 'components/Toggle/index';
import { changeOperationValue } from 'containers/Stand/actions';

class OperationValueBlock extends React.Component {
  toggleOperationValue(name,pinType,pin,checked) {
    this.props.dispatch(changeOperationValue({
      name:name,
      pin: pin.toLowerCase(),
      value:checked,
      }
    ));
  }
  render() {
    return (
      <div>
        <div>Код операции</div>
        <div>Адрес слова МК</div>
        <Div>
          <ToggleVar
            label="2^0"
            name={this.props.name}
            pin = "val_0"
            toggled={this.props.stand.operationsValue['val_0']}
            toggle={this.toggleOperationValue.bind(this)}/>
          <ToggleVar
            label="2^1"
            name={this.props.name}
            pin = "val_1"
            toggled={this.props.stand.operationsValue['val_1']}
            toggle={this.toggleOperationValue.bind(this)}/>
          <ToggleVar
            label="2^2"
            name={this.props.name}
            pin = "val_2"
            toggled={this.props.stand.operationsValue['val_2']}
            toggle={this.toggleOperationValue.bind(this)}/>
          <ToggleVar
            label="2^3"
            name={this.props.name}
            pin = "val_3"
            toggled={this.props.stand.operationsValue['val_3']}
            toggle={this.toggleOperationValue.bind(this)}/>
        </Div>
      </div>
    );
  }
}


const	mapStateToProps	=	state	=> ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OperationValueBlock);