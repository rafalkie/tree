import React, { Fragment, cloneElement } from "react";
import JsonNode from "./JsonNode";
import { getPatch } from "./helpers";
import { IPropsJson } from "./types";
import { useSelector, useDispatch } from "react-redux";
import { hasChilds } from "../helpers/actionTree";
import { deleteChild } from "../store/action";

export interface Props extends IPropsJson {
  keyPath: Array<string>;
}
function JsonObject(props: Props) {
  const dispatch = useDispatch();
  const tree = useSelector((state: any) => state.data);
  const { data, name, deep } = props;

  const keyPath = deep === -1 ? [] : [...props.keyPath, name];
  const keyList = Object.getOwnPropertyNames(data);
  const path = getPatch(keyPath, name);

  const list = keyList.map(key => (
    <Fragment key={key}>
      <JsonNode
        {...props}
        key={key}
        data={data[key]}
        name={key}
        keyPath={keyPath}
        deep={deep + 1}
      />
    </Fragment>
  ));
  const remove = () => dispatch(deleteChild(path));
  return (
    <>
      {cloneElement(props.componentObject, {
        path,
        data,
        name,
        remove,
      })}
      {list}
    </>
  );
}

export default JsonObject;
