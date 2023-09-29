 -- distnict 
 -- truncate ... restart
 -- except 
 -- union 
 -- union all
 -- intersect  
 -- having
 -- json / array


-- ditinct
-- distinct hudi jsdegi new set degnaqa iwlidi repeat boga valuelarni tozalidi

SELECT DISTINCT title FROM courses;

INSERT INTO courses(title , price) VALUES ('web dasturlash', 12000);


ALTER TABLE users ADD COLUMN id TYPE  uuid DEFAULT uuid_generate_v4() NOT NULL;


-- union & union all
-- union va union all hudi joinladaka iwlidi likin bunda tablani ustma ust qoyadi 
-- unionlada bita tarafi bor ustma ust qoylvotgan tablelani column namelari 
-- br hil bolsh kere bomasa column alise orqali bir hil qilsh kere

-- union   distinct ga ohwab qaytarlgan valuelani saralab uniq qb chqaradi FAQAT  valuela hamma narsasi bir hil bosa 
-- id name  pasword balo batarlari bir hil bosa tozalab bitasni ob qolb chqarb beradi

SELECT user_id AS id ,user_name AS name FROM users
UNION 
SELECT id , name  FROM employers;

-- unionda all  2 ta tableda qaytarilgan valuela bosayam birlashtradi  

SELECT user_id AS id ,user_name AS name FROM users
UNION ALL
SELECT id , name  FROM employers;


-- truncate 
-- truncate hudi delete  table  from ga ohwab ishlidi faqat bunda  yana value qoshsa bowidan 1 qlb qowadi

truncate table students restart identity ;

delete table from  users;  


-- except 
-- except 2 tabledagi bir nchi tabledan  2 chi tableda yoq narsalarni charb beradi

SELECT user_id AS id ,user_name AS name FROM users
EXCEPT
SELECT id , name  FROM employers;


-- having 
-- having groub by lar bilan ishlatiladi groub by ni ozi agregat function lar bilan
-- groub by bilan where ishlamagani sababli having ishlatiladi yani having wherdaka fq group by la bilan ishlidi

 SELECT 
     c.id, c.title , COUNT(sub.courseid)
 FROM 
    courses c 
 INNER JOIN 
    courses sub
 ON 
    c.id = sub.courseid
 GROUP BY  
    c.id 
 HAVING c.id > 1;



 SELECT 
     c.id, c.title , COUNT(sub.courseid)
 FROM 
    courses c 
 INNER JOIN 
    courses sub
 ON 
    c.id = sub.courseid
 GROUP BY  
    c.id 
 HAVING COUNT() > 1;


select 
   j.title AS  job_title , e.name AS employer_name 
from
    job_employers je 
join 
   jobs j 
on 
   je.job_id = j.id 
join 
   employers e 
on 
   je.employer_id = e.id 
 group by je.id ;


-- json / array shaklda saqlash

{"city":"Toshkent", "address":{ "district": "yangiyo`l shahar", "street": "yoshlik"}};

create table students(
   id serial not null PRIMARY KEY ,
   name varchar(65) not null,
   password varchar(10) not null,
   address JSON not null
);

INSERT INTO students (name, password , address) VALUES('davlatbek', 'aliev2002', '{"city":"Toshkent", "address":{ "district": "yangiyo`l shahar", "street": "yoshlik"}}' );
INSERT INTO students (name, password , address) VALUES('durdona', 'duri1234', '{"city":"Toshkent", "address":{ "district": "yangiyo`l shahar", "street": "yangi hayot"}}' );
INSERT INTO students (name, password , address) VALUES('dilwoda', 'brukhanova1234',' {"city":"Toshkent", "address":{ "district": "g`azalkent shahar", "street": "3 qahramon"}}' );


TRUNCATE TABLE students 
RESTART IDENTITY;

-- josn columndan malumotla select qlsh 
select name , address -> 'city' from students;

-- yoki json dan objectga ogrb olish 

select name , address ->> 'city' from students;

-- ichma ich ketgan json malumotlardan qiymat olish 

select name , address -> 'address' ->> 'street' as street from students;
select name , address  ->> 'city' as city from students;


