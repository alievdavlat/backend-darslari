-- functions 
-- loop / declare
-- query retuning functions

-- procedures
-- transactions
-- veiws


-- query return functions

CREATE OR REPLACE FUNCTION mySelect()

RETURNS TABLE (
  title varchar(70)
)

LANGUAGE plpgsql 

AS 

$$

BEGIN 

RETURN QUERY SELECT upper(title::text )  FROM  courses;

END 
$$;

-- upper() bu to uppecase methodi js degi


-- declare
  -- declare bu let , const , varlaga ohwab ozgaruvchi elon qillish 

CREATE OR REPLACE FUNCTION calc(num1 int , num2 int, op text)

RETURNS int

LANGUAGE plpgsql 
AS 
$$

DECLARE result int ;

BEGIN 
  IF 
    op = '+'
  THEN 
    result = num1 + num2;
  ELSE 
    result = num1 - num2;
  END IF;

  RETURN result;

END 
$$;


-- loop 

CREATE OR REPLACE FUNCTION looping()

RETURNS TABLE (
id int ,
title varchar(64)
)

LANGUAGE plpgsql 
AS 
$$

DECLARE result record ;

BEGIN 

  for result in (SELECT id ,title FROM courses )

  LOOP 
      id = result.id;
      title  = result.title;
      RETURN NEXT;
      END LOOP;

END 
$$;


-- procedure 
    -- -procedure  functionla bilan bir hil sintaksis faqat u qiymat qaytarmidi

  CREATE TABLE accounts (
    account_id serial not null PRIMARY KEY,
    account_holder text not null,
    account_sum decimal(10, 2) not null
  );


CREATE OR REPLACE PROCEDURE payme(sender int , reciver int , sum bigint)

LANGUAGE plpgsql

AS
$$

BEGIN

IF 
  sum > (SELECT account_sum FROM accounts WHERE account_id = sender)
THEN 
  RAISE INFO '% pul ytemadi  '  ||  sum - (SELECT account_sum FROM accounts WHERE account_id = sender) ;
ELSE 
  UPDATE accounts SET account_sum  = account_sum - sum WHERE account_id = sender;
  UPDATE accounts SET account_sum  = account_sum + sum WHERE account_id = reciver;
END IF ;
RAISE INFO 'pul otdi';
COMMIT
END
$$;


call payme()

-- proceduralani call name() kornshda chaqradi

  CREATE TABLE accounts (
    account_id serial not null PRIMARY KEY,
    account_holder text not null,
    account_sum decimal(10, 2) not null
  );


INSERT INTO accounts(account_holder, account_sum) VALUES ('werpat', 300000);
INSERT INTO accounts(account_holder, account_sum) VALUES ('waropat', 100000);



--- transactions 

    -- bu ichida bir nechta procedurlarni , har hil , ammalarni ichida saqlaydi

    -- masalan nimadir ochadi update boladi lekin bu crud ammalar tablega tasir qmid faqt transaction ichida qoladi 
    -- qchon tasdiqlansa kein ammalga owadi bu xatolardan qochiwga yrdam beradi




    CREATE TABLE actors(
      actor_id serial not null PRIMARY KEY ,
      actor_name varchar(100) not null,
      actor_age int
    );

    INSERT INTO actors(actor_name, actor_age) VALUES 
    ('jonny depp', 56),
    ('dwayne jhonson', 56),
    ('jakie chan', 56),
    ('will smith', 56),
    ('orlonda bloom', 30);


    -- transactionlada ishlar bowlaash uchu 
    -- sql shall da (begin;) kalit sozi bilan caoomanda bersh kerak keingi luboy operatsyala transaction la bilan boladi
    -- operatsyani tasdiqlash uchun commit; komandasi ishlatiladi
    --  operatsyani ortga qaytarish uchun rollback; comandasi ishlatiladi

INSERT INTO actors (actor_name, actor_age) VALUES('jim kerry', 70);



-- unique indexes

CREATE UNIQUE INDEX validator ON  actors(actor_name);
    
INSERT INTO actors(actor_name, actor_age) VALUES ('orlonda bloom', 30);



-- veiws 
    -- veiws bu vertualni table


    select 
         g.group_id, g.group_title AS group , u.user_id , u.user_name AS name 
    from  
      student_groups sg 
    INNER JOIN
      groups g 
    ON 
      sg.group_id = g.group_id 
    INNER JOIN 
      users u 
    ON 
      sg.student_id = u.user_id ;


  SELECT 
      * 
  FROM 
      courses c
  JOIN
    courses sub
  ON
    c.id = sub.courseid;

-- veiws ga misol

 CREATE VIEW virtualTable AS SELECT 
      c.id ,
      c.title,
      sub.title AS subtitle,
      sub.price
  FROM 
      courses c
  JOIN
    courses sub
  ON
    c.id = sub.courseid;

 -- view create bogandan kein owa viewga select qlnadi murojat qlsh uchun 
 select * from virtualTable;