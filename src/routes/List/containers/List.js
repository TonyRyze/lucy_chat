import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { key, actions } from '../modules/List';
import List from '../components/List';
 
const mapStateToProps = state => ({
  counter: state[key].counter
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
 
export default connect(mapStateToProps, mapDispatchToProps)(List);
