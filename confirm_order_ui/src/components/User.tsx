import React from "react";

export type FlaskDataType = {state: string, type: string, text?: string, options?:[]};
export type ReactDataType = {state :string, response:any};

export const FlaskDataContext = React.createContext({data :{} as any, setData:{} as any});
export const ReactDataContext = React.createContext({state :{} as string, response:{} as any});
export const MyContext = React.createContext({openAlert:false,setOpenAlert:{} as any});
