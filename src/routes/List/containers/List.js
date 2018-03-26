import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import { key, actions } from '../modules/List';
import List from '../components/List';
 
const mapStateToProps = state => ({
  counter: state[key].counter
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
