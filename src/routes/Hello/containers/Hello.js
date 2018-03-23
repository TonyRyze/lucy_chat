import { connect } from 'react-redux';

import { increment, doubleAsync, trilbleAsync } from '../modules/Hello';
import Hello from '../components/Hello';
 
const mapStateToProps = state => ({
  todos: state.counter
});
 
const mapDispatchToProps = dispatch => ({
  increment,
  doubleAsync,
  trilbleAsync,
  dispatch
});

 
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
