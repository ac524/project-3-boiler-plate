import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers";

const store = createStore( reducer );

const AppProvider = (props) => {

    return <Provider store={store} {...props} />

}

export default AppProvider;