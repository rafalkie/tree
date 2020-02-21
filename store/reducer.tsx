import * as ActionType from "./actionType";
import { TReducerActions } from "./action";
import objectPath from "object-path";

interface State {
  data: any;
}
const initialState: State = {
  data: {},
};

const reducerOrders = (
  state = initialState,
  action: TReducerActions,
): State => {
  switch (action.type) {
    case ActionType.ADD_DATA:{
      const {data} = action.payload;
      return {...state,data:{...data}}
    }
    case ActionType.DELETE_CHILD: {
      const { path } = action.payload;
      const copyData = state.data;
      objectPath.del(copyData, path);
      console.log(path);
      console.log(copyData);
      return { ...state, data: {...copyData} };
    }
    case ActionType.CHANGE_KEY: {
      const { path, newKey, oldKey } = action.payload;
      const copyData = state.data;
      const copyDataWithOldKey = objectPath.get(copyData, path);
      objectPath.del(copyData, path);
      objectPath.set(
        copyData,
        `${path.slice(0, path.length - (oldKey.length + 1))}.${newKey}`,
        copyDataWithOldKey,
      );
      return { ...state, data: copyData };
    }

    default:
      return state;
  }
};
export default reducerOrders;

/* Specificaions:
  1.Functions:
    - has childs
    - delete child
    - change key
    - add array
    - delete in array

*/
