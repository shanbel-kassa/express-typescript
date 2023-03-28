CREATE TABLE public.course (
     "id" uuid NOT NULL,
	 "name" text NOT NULL,
	 "cp" integer NOT NULL,
	 CONSTRAINT "course_pkey" PRIMARY KEY ("id")
); 