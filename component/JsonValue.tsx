import { cloneElement } from "react";
import { getPatch } from "./helpers";
import { IPropsJson } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { hasChilds } from "../helpers/actionTree";

export interface Props extends IPropsJson {
  keyPath: Array<string>;
}
function JsonValue(props: Props) {
  const dispatch = useDispatch();
  const tree = useSelector((state: any) => state.data);
  const { name, keyPath, data } = props;
  const path = getPatch(keyPath, name, `.${name}`);

  return cloneElement(props.componentValue, {
    path,
    name,
    value: data,
  });
}

export default JsonValue;
