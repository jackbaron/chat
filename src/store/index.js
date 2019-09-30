import { createStore } from 'redux';

import reducer from '../reducers/index';

const store = createStore(reducer);

store.subscribe(() => {
    fancyLog();
});

function fancyLog()
{
    console.log("%c Rendered with ? ??", "background: purple; color: #fff");
    console.log(store.getState());
}

export default store;