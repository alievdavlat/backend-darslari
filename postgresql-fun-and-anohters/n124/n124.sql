CREATE TABLE IF NOT EXISTS users (
    user_id serial primary key,
    username VARCHAR(50) not null,
    gender  VARCHAR(50) not null
);
INSERT INTO users(username, gender) VALUES 
('Olim', 'male'),
('Eshmat', 'male'),
('Toshmat', 'male'),
('Odil', 'male'),
('Salim', 'male');
    CREATE TABLE comment (
        comment_id SERIAL primary key,
        comment_text text not null,
        user_id int references users(user_id)
    );


INSERT INTO comment(comment_text, user_id) VALUES
('Odil comment', 1),
('Toshmat comment', 3),
('Eshmat comment', 2),
('Odil comment', 4),
('Odil comment', 4),
('Odil comment', 4);


--  select * from users ORDER BY first_name DESC
-- SELECT  * FROM users WHERE first_name LIKE '%I%';
-- SELECT  * FROM users WHERE first_name ILIKE '%I%';
-- SELECT * FROM students  LIMIT 10 ;
-- SELECT * FROM students  LIMIT 10 OFFSET 3;
-- select * from users WHERE id > 10  and  first_name ILIKE '%I%' ORDER BY first_name ASC

CREATE TABLE users (
    id serial NOT NULL,
    username varchar(32) NOT NULL ,
);



-- DATATYPES
    Number       
                    SMALL INT     2**32
                    INT           2**64
                    BIGINT        2*128

    String
                    VARCHAR(25)
                    CHAR(n)
                    CHARACTER VARYING(n)
                    CHARACTER(n)
                    TEXT  ||  VARCHAR
    
    BOOLEAN         BOOLEAN

    DATE            DATE          
                            CURRENT_TIMESTAMP


INSERT INTO users VALUES (1,'Olim','@olimchik','+998941654615',23 );




drop table car;
CREATE TABLE car (
    id SERIAL,
    model varchar(25) NOT NULL,
    color character varying(12) not NULL ,
    price int NOT NULL,
    at_date   timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
 
);



INSERT INTO car (model, color, price) VALUES 
('Damas', 'white',5000);
('Tiko', 'blue',3500),
('Matiz', 'green',1500),
('Malibu', 'black',25000),
('Gentra', 'red',10000);


    CREATE TABLE IF NOT EXISTS books (
        book_id SERIAL primary key,
        title VARCHAR(200) NOT NULL,
        price INT
    );


CREATE type gender as enum('male', 'female');
create domain vali_name VARCHAR(50) not null;

CREATE TABLE IF NOT EXISTS users (
    user_id serial primary key,
    username vali_name,
    gender gender
);



-- select 10 / 2 as boluv
-- select 10 % 2 as qoldiq
-- SELECT ascii('A')
-- SELECT substr('w3resource',2,3)
-- SELECT substring('w3resource' from 4 for 5);
-- SELECT nullif(2,5) 
-- SELECT concat('','','')
-- SELECT now() -- date  time
-- SELECT now()::date
-- SELECT now()::time
-- SELECT now()-interval '1 YEAR'
-- SELECT now()-interval '1 Month'
-- SELECT now()-interval '1 days'
-- SELECT (now()-interval '1 days')::date
-- SELECT extract(year from now())
-- SELECT extract(day from now())
-- select age('2023.08.15', '2000.12.02');


select gender from students  GROUP BY  gender;
select gender, json_agg(first_name) from students  GROUP BY  gender;
select * from students 


-- PostgreSQL'da SUM funksiyasi, bir jadvaldagi ma'lum bir ustun bo'ylab qiymatlarni 
-- yig'indisini hisoblash uchun ishlatiladi. Bu amaliyot ko'plab sonli ma'lumotlar 
-- bilan ishlashda qo'llaniladi. Quyidagi oddiy sintaksisni ko'ramiz:

SELECT SUM(ip_address) FROM users ;
SELECT AVG(ip_address) FROM users ;
SELECT MAX(ip_address) FROM users;
SELECT MIN(ip_address) FROM users ;


-- ALTER TABLE users DROP COLUMN last_name;
-- ALTER TABLE mockaroo RENAME TO users;
-- ALTER TABLE users ADD COLUMN last_name text ;
-- ALTER TABLE mockaroo DROP COLUMN last_name;
-- ALTER TABLE mockaroo ADD COLUMN last_name VARCHAR(100);




CREATE TABLE IF NOT EXISTS teachers (
    id serial PRIMARY KEY,
    t_name VARCHAR(30) NOT NULL,
    age int
);
CREATE TABLE IF NOT EXISTS groups (
    id serial PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE,
    month int NOT NULL,
    teach_id int REFERENCES teachers (id) on delete CASCADE
);

CREATE TABLE IF NOT EXISTS students (
    id serial,
    username VARCHAR(30) NOT NULL,
    group_id int REFERENCES groups (id) on DELETE CASCADE
);


insert into teachers (t_name, age) VALUES 
('Kamol',25),
('Jamol',26),
('Ilhom',24),
('Obit',26),
('Jasur',21),
('Umid',20),
('Vohid',23),
('Jo''rabek',26),
('Ali',28);






insert into groups (name, month,teach_id ) VALUES 
('NODE JS',7,8),
('JAVA',6,5),
('PHP',6,null),
('ANDROID',7,3),
('FLATTER',8,9),
('REACT',6,null),
('PYTHON',7,7),
('C',6,null),
('DOTNET',8,1);


insert into students (username,group_id) VALUES 
('Sardor Malikov',3),
('Qurbonov Elyor',3),
('Olimov Fayozbek',null),
('Po''latov Murod',3),
('Jamilov Kamron',1),
('Nabiyev Husniddin',2),
('Jalolov Jamshid',2),
('Nuriddinov Shokir',null),
('Berdiyev Farrux',2),
('Islomov G''ulom',4),
('Qambarova Habiba',null),
('Olim Qodirov',5),
('Hoshimova Sabina',null),
('Karimov Dilniyoz',5),
('Abdullayeva Sevara',5),
('Kamila Malikova',3),
('Davlatov Elyor',5),
('Dalimov Fozil',null),
('Maratov Suxrob',3),
('Xalilov Kamron',2),
('Botirov Husniddin',1),
('Malikova Oqila',2),
('Valieva Sabina',8),
('Nuriddinova Shokira',3),
('Berdiyev Zarif',4),
('Abdullayev Sarvar',9),
('Madaminov G''ulom',1),
('Bo''riyeva Xolida',null),
('Nodira Qodirova',8),
('Karimov Davron',9),
('Ochilova Komila',1);
