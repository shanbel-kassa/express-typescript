import { Student } from "../../types/student";
import { mapToStudent } from "./map";
import { PoolClient } from "pg";
import { dbConfig } from "../../config/db-config";

export const createStudentRepo = async (student: Student): Promise<Student> => {
  
  const db = dbConfig();

  const sql = `
    INSERT INTO student (
      id,
      firstName,
      lastName,
      gender,
      age
    )
    VALUES ($1, $2, $3, $4, $5) RETURNING id,
    firstName,
    lastName,
    gender,
    age`;

  const params = [
    student.id,
    student.firstName,
    student.lastName,
    student.gender,
    student.age
  ];

  return await db.query(sql, params).then((res) =>mapToStudent(res.rows[0])).catch(error=> { throw error });
};
