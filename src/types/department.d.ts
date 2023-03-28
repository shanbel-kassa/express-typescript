import { Student } from "./student";

export type Department = {
    id: string;
    name: string;
    students?: Student[]
  };
  