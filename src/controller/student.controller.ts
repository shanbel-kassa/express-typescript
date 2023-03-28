import { getStudentsRepo } from "../repo/student/select-all";
import { getStudentRepo } from "../repo/student/select-by-id";
import { updateStudentRepo } from "../repo/student/update";
import { Student } from "../types/student";
import { deleteStudentRepo } from "../repo/student/delete";
import { createStudentRepo } from "../repo/student/create";

const getStudents = async (query): Promise<Student[]> => {
  return await getStudentsRepo(query);
};

const getStudent = async (params): Promise<Student> => {
  const { id } = params;
  return await getStudentRepo(id);
};

const createStudent = async (student: Student): Promise<Student> => {
  return await createStudentRepo(student);
};

const updateStudent = async (student: Student): Promise<Student | string> => {
  return await updateStudentRepo(student);
};

const deleteStudent = async (params): Promise<string> => {
  const { id } = params;
  console.log("id...", id);
  return await deleteStudentRepo(id);
};

export const studentController = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
