import React from "react";
import { IComponentsJson } from "./component/types";
import { createStore,combineReducers } from "redux";
import rootReducer from "./store/reducer";
import { Provider, } from "react-redux";
import Tree from "./Tree";

interface Props extends IComponentsJson {
  data: any;
  setDataTree: (data: any) => void;
}
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
function TreeBulider(props: Props) {
  return (
    <Provider store={store}>
      <Tree {...props}  />
    </Provider>
  );
}

export default TreeBulider;
