import { Student } from "../../types/student";

export const mapToStudent = (row): Student => {
  return {
    id: row.id,
    firstName: row.firstname,
    lastName: row.lastname,
    gender: row.gender,
    age: row.age,
  };
};
