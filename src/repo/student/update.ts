import { Student } from "../../types/student";
import { mapToStudent } from "./map";
import { PoolClient } from "pg";
import { dbConfig } from "../../config/db-config";
import { getStudentRepo } from "./select-by-id";

export const updateStudentRepo = async (
  student: Student
): Promise<Student | string> => {
  const row = await getStudentRepo(student.id);

  if (row.id) {
    const db = dbConfig();

    const sql = `
  UPDATE student SET
  firstName = $1,
  lastName = $2,
  gender = $3,
  age = $4
      WHERE id = $5
RETURNING id,
    firstName,
    lastName,
    gender,
    age`;

    const params = [
      student.firstName,
      student.lastName,
      student.gender,
      student.age,
      student.id,
    ];

    return await db
      .query(sql, params)
      .then((res) => mapToStudent(res.rows[0]))
      .catch((error) => {
        throw error;
      });
  }

  return "Student not found";
};
