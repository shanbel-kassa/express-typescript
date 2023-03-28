import { Router } from "express";
import { studentController } from "../controller/student.controller";

export const studentRoute = () => {
  const router = Router();

  router.get("/get-all", (req, res, next) => {
    studentController
      .getStudents(req.query)
      .then(res.json.bind(res))
      .catch(next);
  });

  router.get("get-by-id/:id", (req, res, next) => {
    studentController
      .getStudent(req.params)
      .then(res.json.bind(res))
      .catch(next);
  });

  router.post("/create", (req, res, next) => {
    studentController
      .createStudent(req.body)
      .then(res.json.bind(res))
      .catch(next);
  });

  router.put("/update", (req, res, next) => {
    studentController
      .updateStudent(req.body)
      .then(res.json.bind(res))
      .catch(next);
  });

  router.delete("/delete/:id", (req, res, next) => {
    studentController
      .deleteStudent(req.params)
      .then(res.json.bind(res))
      .catch(next);
  });

  return router;
};
