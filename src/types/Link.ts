import { ReactNode } from "react";

export interface LinkItem {
    name: string;
    path: string;
    icons?: ReactNode
  }

  export interface LinkItemList {
    title: string,
    links: LinkItem []
  }

  