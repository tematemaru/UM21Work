import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { connect } from 'react-redux';

const style = {
  marginRight: 50,
  position:'relative',
  left:'100%',
  top:105,
  right:50

};
class CheckBox extends Checkbox {
  constructor(props) {
    super(props);
    this.state.cheked = this.props.cheked
    this.state.disabled = this.props.disabled
    this.state.defaultChecked = this.props.defaultChecked
  }
  onCheck(event, isInputChecked) {
    if (this.props.theme && this.props.item.status_for_current_user === 'started' ) {
      if (isInputChecked) {
        this.setState({cheked:true, defaultChecked: true})
        this.props.onBeginTheme(this.props.subjectId, this.props.themeId);
      }


    }
    if (this.props.subject) {
      if (isInputChecked && this.props.status === 'not_started') {
        this.setState({cheked:true, defaultChecked: true})
        this.props.onBeginSubject(this.props.subjectId);
      }
    }

  }
  render() {
    return (
      <Checkbox
        style={{width:25}}
        disabled={this.props.disabled}
        defaultChecked={this.state.defaultChecked}
        checked={this.state.cheked}
        onCheck={this.onCheck.bind(this)}
      />
    )
  }
};

const	mapStateToProps	=	state	=> ({
  ...state,
});
export default connect(mapStateToProps)(CheckBox);
