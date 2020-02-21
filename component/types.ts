export interface IPropsJson extends IComponentsJson {
  data: any;
  name: string;
  deep: number;
  setDataTree: (data: any) => void;
}

export interface IComponentsJson {
  componentArray: any;
  componentObject: any;
  componentValue: any;
}

export interface ITreeProps {
  path?: string;
  name?: string;
  value?: string;
  data?:any;
  remove?:()=>void
}
