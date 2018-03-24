import { withRouter } from 'react-router-dom';
import { injectReducer } from '../../store/reducers';
import reducers, { key } from "./modules/List";
import { store } from '../../App';
import List from './containers/List';

injectReducer(store, { key, reducers });
export default withRouter(List);
