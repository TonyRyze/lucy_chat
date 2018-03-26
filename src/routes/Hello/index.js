
import { injectReducer } from '../../store/reducers';
import reducers, { key } from "./modules/Hello";
import { store } from '../../container/App';
import Hello from './containers/Hello';

injectReducer(store, { key, reducers });
export default Hello;
