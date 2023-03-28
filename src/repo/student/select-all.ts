import { Student } from "../../types/student";
import { mapToStudent } from "./map";
import { dbConfig } from "../../config/db-config";

export const getStudentsRepo = async (params): Promise<Student[]> => {
  const db = dbConfig();

  const sql = `select * from student`;

  return await db.query(sql).then((res) => res.rows.map(mapToStudent)).catch(error=> {throw error});
};
