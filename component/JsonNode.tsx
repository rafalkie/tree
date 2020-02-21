import React, { useState } from "react";
import dataTypes from "../helpers/dataTypes";
import { getObjectType } from "../helpers/objectTypes";
import JsonObject from "./JsonObject";
import JsonArray from "./JsonArray";
import JsonValue from "./JsonValue";
import { IPropsJson } from "./types";

interface Props extends IPropsJson {
  keyPath?: Array<string>;
}

function JsonNode(props: Props) {
  const { data } = props;
  const [keyPath, setKeyPath] = useState(props.keyPath || []);
  const dataType = getObjectType(data);
  const componentObject = <JsonObject {...props} keyPath={keyPath} />;
  const componentArray = <JsonArray {...props} keyPath={keyPath} />;
  const componentValue = <JsonValue {...props} keyPath={keyPath} />;

  switch (dataType) {
    case dataTypes.ERROR:
      return componentObject;
    case dataTypes.OBJECT:
      return componentObject;
    case dataTypes.ARRAY:
      return componentArray;
    case dataTypes.STRING:
      return componentValue;
    case dataTypes.NUMBER:
      return componentValue;
    case dataTypes.BOOLEAN:
      return componentValue;
    case dataTypes.DATE:
      return componentValue;
    case dataTypes.NULL:
      return componentValue;
    case dataTypes.UNDEFINED:
      return componentValue;
    case dataTypes.SYMBOL:
      return componentValue;
    default:
      return null;
  }
}

export default JsonNode;
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
