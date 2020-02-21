import React, {  useEffect } from "react";
import { getObjectType } from "./helpers/objectTypes";
import JsonNode from "./component/JsonNode";
import { IComponentsJson } from "./component/types";
import {  useDispatch, useSelector } from "react-redux";
import { addData } from "./store/action";

interface Props extends IComponentsJson {
  data: any;
  setDataTree: (data: any) => void;
}

function Tree(props: Props) {
  const dispatch = useDispatch();
  const { setDataTree } = props;
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    if(props.data){
      dispatch(addData(props.data));
    }
  }, [props.data]);

  if(!data){
    return null;
  }
  const dataType = getObjectType(data);
  let node = null;

  if (dataType === "Object" || dataType === "Array") {
    node = <JsonNode {...props} data={data}  name="" deep={-1} />;
  } else {
    node = "Dane muszą być obiektem lub tablicą";
  }
  return (
      <div className="tree">{node}</div>
  );
}

export default Tree;
