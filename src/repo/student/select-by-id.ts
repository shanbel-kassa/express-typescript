import { Student } from "../../types/student";
import { mapToStudent } from "./map";
import { dbConfig } from "../../config/db-config";

export const getStudentRepo = async (id:string): Promise<Student> => {
  
  const db = dbConfig();
  

  let sql = `select * from students where id = $1`;

   
  const params=[id]
  

  return await db.query(sql,params).then((res) =>{
    if(res.rows.length) return mapToStudent(res.rows[0])

    return {}
  }).catch(error=> {throw error});;
};

