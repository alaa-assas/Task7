import { ReactNode } from "react";

interface Option {
  value: string;
  label: string;
}

interface FieldConfig {
  id: string;
  label: string;
  icon: ReactNode;
  options: Option[];
  placeholder?: string;
}

export interface TabConfig {
  label: string;
  icon: ReactNode;
  fields: FieldConfig[];
}