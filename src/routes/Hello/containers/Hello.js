import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import { key, actions } from '../modules/Hello';
import Hello from '../components/Hello';
 
const mapStateToProps = state => ({
  counter: state[key].counter
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hello));
