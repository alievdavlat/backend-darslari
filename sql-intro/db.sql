
SELECT
    jobs.id, jobs.title, employers.name
FROM
    job_employers je
INNER JOIN
    jobs
ON
    je.job_id = jobs.id 
FULL OUTER JOIN 
    employers
ON
    je.employer_id = employers.id ;


--------------------------------------------------

--self join 

CREATE TABLE courses (
  id bigserial not null PRIMARY KEY,
  title varchar(70) not null,
  price bigint not null,
  courseId int REFERENCES courses(id) 
) ;

INSERT INTO courses (title, price) VALUES('web datsurlash', 800000) ;
INSERT INTO courses (title, price, courseId) VALUES('Frontend', 600000, 1) ;
INSERT INTO courses (title, price, courseId) VALUES('backend', 900000, 1) ;
INSERT INTO courses (title, price, courseId) VALUES('Nodejs', 600000, 3) ;
INSERT INTO courses (title, price, courseId) VALUES('Reactjs', 700000, 2) ;
INSERT INTO courses (title, price, courseId) VALUES('postgresSql', 850000, 4) ;


SELECT 
  c.id , c.title , sub.price , sub.title 
FROM 
  courses c
LEFT JOIN
  courses sub
ON
  c.id = sub.courseId 
WHERE 
  c.id IS NOT NULL ;


