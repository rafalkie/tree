import * as ActionType from "./actionType";

export const addData = (data:any) => ({
  type:ActionType.ADD_DATA,
  payload:{data}
});
export const deleteChild = (path:string) => ({
	type: ActionType.DELETE_CHILD,
	payload: {path}
});

export const changeKey = (path:string, newKey:string, oldKey:string) => ({
	type: ActionType.CHANGE_KEY,
	payload: {path,newKey,oldKey}
});

export interface IReduxBaseAction {
	type: ActionType.EReduxActionTypes;
}

export interface IReduxAddData extends IReduxBaseAction {
	type: ActionType.EReduxActionTypes.ADD_DATA;
	payload: {data:any};
}
export interface IReduxDeleteChild extends IReduxBaseAction {
	type: ActionType.EReduxActionTypes.DELETE_CHILD;
	payload: {path:string};
}
export interface IReduxChangeKey extends IReduxBaseAction {
	type: ActionType.EReduxActionTypes.CHANGE_KEY;
	payload: {path:string,newKey:string,oldKey:string}
}

export type TReducerActions = IReduxDeleteChild
                            | IReduxChangeKey
                            | IReduxAddData;
