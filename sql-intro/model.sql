 -- CREATE DATABASE n124 ;

-- DDL & DML 
-- DDL - Data Defination language
-- DML - Data Manipulation Language

-- malumotla Table holatda saqlanadi

-- DROP TABLE IF EXISTS users ;

-- CREATE TABLE users (
--   id serial not null PRIMARY KEY ,
--   name text not null ,
--   age integer not null ,
--   password integer not null 
-- );

-- SELECT * FROM users ;
-- SELECT age FROM users ;
 
-- INSERT INTO users (name , age) VALUES('eshmat', 21);

-- UPDATE  users SET name = 'sheshmat' ; -- bitta  propertyni update qlsh 
-- UPDATE USERS SET password = 123 WHERE id <= 3 ;
-- UPDATE  users SET name = 'sheshmat', age = 40 ; -- ikkta propertyni update qlsh 

-- DELETE FROM users ; -- users table pustoy qb qoyadi hamma narsani ochradi

-- INSERT INTO users ( name , age ) 
-- VALUES('eshmat', 21),
-- ('toshmat', 43),
-- ('toshpolat', 23),
-- ('shermat', 32) ;

 
-- aynan tabledegi bitta userni ochirish , olsh , ozgartrish

-- SELECT * FROM users WHERE id = 3;  
-- SELECT name FROM users WHERE id = 3; 
-- SELECT name FROM users WHERE id > 3; 


-- tableni ozini ozgartrish


-- ALTER TABLE users ADD COLUMN password integer ; --tablga column qoshadi
-- ALTER TABLE users DROP COLUMN password ; -- table column ochradi
-- ALTER TABLE users ALTER COLUMN age TYPE text; -- columndegi propertyni type ozgartradi
-- ALTER TABLE users RENAME allUsers

-- Numeric data types 
    -- serial or bigserial 
    -- integer or biginteger 
    -- float 
    -- smallint or small
    -- decimal
    -- real

-- String 
   -- varchar
   --char
   --text

--Boolen
  -- true & false



--relationship

  --turlari 
      -- one-to-one
      -- one-to-many
      -- many-to-many



      CREATE TABLE posts (
        id serial not null PRIMARY KEY,
        title varchar(65) not null,
        user_id int,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
       );

      INSERT INTO posts (title, user_id) VALUES ('eshmatni posti', 6);
      INSERT INTO posts (title, user_id) VALUES ('toshmatni posti', 7);
      INSERT INTO posts (title, user_id) VALUES ('seshmatni posti', 6);

      ALTER TABLE posts ADD COLUMN userId int REFERENCES users (id);

      UPDATE posts SET userId = 4 WHERE id = 1;

----------------------------------------------------------------------------------------
      DROP TABLE IF EXISTS comments;

      CREATE TABLE comments (

        id serial not null,
        body varchar(255) not null,
        post_id int ,
        user_id int ,
        PRIMARY KEY(id),
        FOREIGN KEY (post_id)
        REFERENCES posts(id) ON DELETE SET NULL,  
        
        FOREIGN KEY (user_id)
        REFERENCES users(id) ON DELETE SET NULL
      );


      INSERT INTO comments (body, post_id, user_id) VALUES ('eshmatni postiga tohsmatdan comments', 7, 6);
      INSERT INTO comments (body, post_id, user_id) VALUES ('toshmatni postiga eshmatdan comments', 7 , 7);
      INSERT INTO comments (body, post_id, user_id) VALUES ('seshmatni postiga eshmatdan comments', 8, 6);


----------------------------------------------------------------------------------------


CREATE TABLE jobs (
  id serial not null PRIMARY KEY,
  title varchar(45) not null
) ;


CREATE TABLE employers (
    id serial not null PRIMARY KEY,
    name varchar(50) not null
      
) ;

-- junction or intermidate table
 
CREATE TABLE job_employers (
  id serial not null PRIMARY KEY,
  job_id int ,
        FOREIGN KEY (job_id)
        REFERENCES jobs(id) ON DELETE SET NULL,

  employer_id int ,
        FOREIGN KEY (employer_id)
        REFERENCES employers(id) ON DELETE SET NULL
) ;


INSERT INTO jobs (title) VALUES('Backend developer') ;
INSERT INTO jobs (title) VALUES('Fullstack developer') ;
INSERT INTO jobs (title) VALUES('Frontend developer') ;
INSERT INTO jobs (title) VALUES('HR') ;


INSERT INTO employers (name) VALUES('eshmat ') ;
INSERT INTO employers (name) VALUES('toshmat ') ;
INSERT INTO employers (name) VALUES('nurmat ') ;
INSERT INTO employers (name) VALUES('holmat') ;


INSERT INTO job_employers (job_id, employer_id) VALUES(1 , 1) ;
INSERT INTO job_employers (job_id, employer_id) VALUES(1, 2) ;
INSERT INTO job_employers (job_id, employer_id) VALUES(2, 3) ;
INSERT INTO job_employers (job_id, employer_id) VALUES(3, null);
INSERT INTO job_employers (job_id, employer_id) VALUES(null, 4);

--joins

SELECT * FROM users JOIN posts ON users.id = posts.user_id ; -- table lani birllashtrish


SELECT
   users.id AS userID ,
   users.name AS username ,
   posts.title AS post_title
FROM
   users 
JOIN 
   posts 
ON 
   users.id = posts.user_id;


SELECT 
   jobs.id AS jobID ,
   jobs.title AS jobTitle,
   employers.name
FROM 
   job_employers je
JOIN 
   jobs
ON 
   je.job_id = jobs.id
JOIN
   employers
ON
   je.employer_id = employers.id ;


   --JOINS
      -- join
      -- inner join 
      -- left join ( outer )
      -- right join ( outer )
      -- self join 
      -- cross join ( outer )
      -- full join ( outer )
      -- natural join
