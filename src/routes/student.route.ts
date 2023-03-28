import { Router } from "express";
import { studentController } from "../controller/student.controller";

export const studentRoute = () => {
  const router = Router();

  /**
   * @swagger
   * /students/get-all:
   *      get:
   *         responses:
   *              200:
   *                  description: Success
   */
  router.get("/get-all", (req, res, next) => {
    studentController
      .getStudents(req.query)
      .then(res.json.bind(res))
      .catch(next);
  });

  /**
   * @swagger
   * /students/get-by-id/{id}:
   *      get:
   *          parameters:
   *               - in: path
   *                 name: id
   *                 required: true
   *                 schema:
   *                     type : string
   *                     format: uuid
   *          responses:
   *              200:
   *                 description: Success
   *                 content:
   *                   application/json:
   *                      schema:
   *                         type: object
   *                         properties:
   *                            id:
   *                              type: string
   *                            firstName:
   *                               type: string
   */
  router.get("get-by-id/:id", (req, res, next) => {
    studentController
      .getStudent(req.params)
      .then(res.json.bind(res))
      .catch(next);
  });

  /**
   * @swagger
   * /students/create:
   *      post:
   *       requestBody:
   *           required: true
   *           content:
   *              application/json:
   *                 schema:
   *                    type: object
   *                    properties:
   *                       id:
   *                          type: string
   *                       firstName:
   *                          type: string
   *                       lastName:
   *                          type: string
   *                       age:
   *                          type: number
   *                       gender:
   *                          type: string
   *       responses:
   *              200:
   *                 description: Success
   *                 content:
   *                   application/json:
   *                      schema:
   *                         type: object
   */
  router.post("/create", (req, res, next) => {
    studentController
      .createStudent(req.body)
      .then(res.json.bind(res))
      .catch(next);
  });

  /**
   * @swagger
   * /students/update:
   *      put:
   *        requestBody:
   *           required: true
   *           content:
   *              application/json:
   *                 schema:
   *                    type: object
   *                    properties:
   *                       id:
   *                          type: string
   *                       firstName:
   *                          type: string
   *                       lastName:
   *                          type: string
   *                       age:
   *                          type: number
   *                       gender:
   *                          type: string
   *        responses:
   *              200:
   *                 description: Success
   *                 content:
   *                   application/json:
   *                      schema:
   *                         type: object
   */
  router.put("/update", (req, res, next) => {
    studentController
      .updateStudent(req.body)
      .then(res.json.bind(res))
      .catch(next);
  });

  /**
   * @swagger
   * /students/delete/{id}:
   *      delete:
   *          parameters:
   *               - in: path
   *                 name: id
   *                 required: true
   *                 schema:
   *                     type : string
   *                     format: uuid
   *          responses:
   *              200:
   *                 description: Success
   *                 content:
   *                   application/json:
   *                      schema:
   *                         type: string
   */
  router.delete("/delete/:id", (req, res, next) => {
    studentController
      .deleteStudent(req.params)
      .then(res.json.bind(res))
      .catch(next);
  });

  return router;
};
