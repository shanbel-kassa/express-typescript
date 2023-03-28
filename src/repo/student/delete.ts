import { Student } from "../../types/student";
import { mapToStudent } from "./map";
import { PoolClient } from "pg";
import { dbConfig } from "../../config/db-config";
import { getStudentRepo } from "./select-by-id";

export const deleteStudentRepo = async (id:string):Promise<string> => {
  
    const row = await getStudentRepo(id)

    if(row.id) {
        const db = dbConfig();

        const sql = `
        DELETE FROM
          students
        WHERE
           id = $1 RETURNING id`
      
      const params = [id]
      
      return await db.query(sql, params).then(res=>res.rows[0].id).catch(error=> {throw error})
    }
    
    return "Student not found "

};
