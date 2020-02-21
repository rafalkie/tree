import React, { Fragment, cloneElement } from "react";
import JsonNode from "./JsonNode";
import { getPatch } from "./helpers";
import { IPropsJson } from "./types";
import { useDispatch } from "react-redux";

export interface Props extends IPropsJson {
  keyPath: Array<string>;
}
function JsonArray(props: Props) {
  const dispatch = useDispatch();
  const { name, deep, data } = props;
  const keyPath = deep === -1 ? [] : [...props.keyPath, name];

  const path = getPatch(keyPath, name);
  const list = data.map((item: any, key: number) => (
    <Fragment key={key}>
      <JsonNode
        {...props}
        key={item}
        data={item}
        name={`${key}`}
        keyPath={keyPath}
        deep={deep + 1}
      />
    </Fragment>
  ));

  return (
    <>
      {cloneElement(props.componentArray, { path, name,data })}
      <div style={{paddingLeft:"25px"}}>
        {list}
      </div>
    </>
  );
}

export default JsonArray;

const test = {
  type: "Any",
  parameters: {
    specifications: [
      {
        type: "All",
        parameters: {
          groups: ["ff", "ff"],
        },
      },
      {
        type: "All",
        parameters: {
          groups: ["ff44", "ff"],
        },
      },
    ],
  },
};
