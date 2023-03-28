CREATE TABLE public.student (
     "id" uuid NOT NULL,
	 "firstname" text NOT NULL,
	 "lastname" text NOT NULL,
	 "age" integer NOT NULL,
	 "gender" text NOT NULL,
	 "courseid" text NOT NULL,
	 CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);