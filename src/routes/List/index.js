import { injectReducer } from '../../store/reducers';
import reducers, { key } from "./modules/List";
import { store } from '../../container/App';
import List from './containers/List';

injectReducer(store, { key, reducers });
export default List;
