 
 export const  SwaggerConfig = () =>{

  return   {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "REST API for Swagger Documentation",
        version: "1.0.0",
      },
      schemes: ["http", "https"],
      servers: [{ url: "http://localhost:3000/" }],
    },
    apis: [
      `../routes/student.route.ts`,
      "./dist/routes/student.route.js",
    ],
  };
 }
  
  