

CREATE OR REPLACE FUNCTION hello (name text) 

RETURNS text

LANGUAGE plpgsql

AS
 
$$ 

BEGIN 
    RETURN 'HELLO' || name ;

END
$$ ;


-- ishlatiw  
 -- select hello('')


 CREATE OR REPLACE FUNCTION lengthChecker (name text)

 RETURNS text

LANGUAGE plpgsql

AS
 $$

BEGIN

 IF LENGTH(name) > 5  THEN RETURN 'ismin kotda 5 dan ';  ELSE RETURN 'ismn kichkna 5 dan';  END IF;

END
$$;



 CREATE OR REPLACE FUNCTION lengthChecker2 (name text)

 RETURNS text

LANGUAGE plpgsql

AS
 $$

BEGIN

 IF LENGTH(name) = 5 THEN RETURN 'ismin 5 ga teng' ; ELSEIF LENGTH(name) > 5  THEN RETURN 'ismin kotda 5 dan ';  ELSE RETURN 'ismn kichkna 5 dan';  END IF;

END
$$;

-- fizbuz  problem example i sql functions with using conditions ( if , else if , if then)

CREATE OR REPLACE FUNCTION fizzbuzz( arg int)

RETURNS text

LANGUAGE plpgsql

AS

$$

BEGIN

    IF arg % 15 = 0 THEN RETURN 'fizzbuzz' ; ELSEIF arg % 3 = 0 THEN RETURN 'fizz' ; ELSEIF arg % 5 = 0 THEN RETURN 'buzz';
  END IF ;

END
$$ ;s




-- Trigers - ( turtki bermoq nimagadr iwlawiga , events sodda qib etganda )

  -- ochgan userni bowqa tablega saqlab qoyadgan trigger 

  DROP TABLE IF EXISTS archive;

  CREATE TABLE archive (
    archive_id bigint not null PRIMARY KEY, 
    archive_name text not null,
    archive_password int not null,
    archive_status int not null,
    archive_created_at DATE not null,
    added_date timestamptz  default current_timestamp
  );  

  


  
  CREATE OR REPLACE FUNCTION  deleteFn ()
  RETURNS TRIGGER 
  LANGUAGE plpgsql
  AS
  $$

  BEGIN

  INSERT INTO archive(
    archive_id, 
    archive_name,
    archive_password, 
    archive_status, 
    archive_created_at
    ) values (
      OLD.user_id,
      OLD.user_name,
      OLD.user_password,
      OLD.user_status,
      OLD.created_at
      );

      RETURN OLD;

  END
  $$;
  

-- triger example
CREATE TRIGGER deleteTrigger 
AFTER DELETE 
ON users 
FOR EACH ROW
EXECUTE PROCEDURE deleteFn();


-- triggerlarni old va new propertylari bor ol bu eskl ochvotgan malumot new yngi keladgan 



-- reverse deleted user from archive to users 

CREATE OR REPLACE FUNCTION reverseUser() 
RETURNS TRIGGER
LANGUAGE plpgsql
AS 
$$
BEGIN
  INSERT INTO users(user_id,user_name, user_password, user_status,created_at) VALUES (
    OLD.archive_id,
    OLD.archive_name,
    OLD.archive_password,
    OLD.archive_status,
    OLD.archive_created_at
  );

  RETURN OLD;
END
$$;

CREATE TRIGGER  dleterArchiveTrigger
AFTER DELETE
ON archive 
FOR EACH ROW
EXECUTE PROCEDURE reverseUser();




-- trigerlarni 2 xil yolda iwlatsa boladi after nimadirdan kein iwlatvorsa boladi
-- yoki before nimadrdan oldn iwlatvorsa boladi before yani nimadrdan oldn iwlatsa
-- uni middleware qlb iwlatsa ham boladi condition berb

-- before iwlatilganda masalan tablga value berwdan oldn birorta wart berlsa u middleware ornida keladi 
-- va tablga endi Old mas new bilan yangi qiymat berladi

-- misol 

CREATE OR REPLACE FUNCTION middleware() 
RETURNS TRIGGER
LANGUAGE plpgsql
AS 
$$
BEGIN
  IF
    NEW.user_id > 10
  THEN
    RAISE EXCEPTION 'Error';
    RETURN OLD
    ELSE
      INSERT INTO users(user_id,user_name, user_password, user_status,created_at) VALUES (
        NEW.user_id,
        NEW.user_name,
        NEW.user_password,
        NEW.user_status,
        NEW.user_created_at
      );
     RETURN NEW;

END IF ;


END
$$;


-- trigerlarni update query bilan ishlatish

CREATE TABLE IF NOT EXISTS

CREATE TABLE archiveUpdate (
    updatedUser_id bigint not null PRIMARY KEY, 
    updatedUser_name text not null,
    updatedUser_password varchar(65) not null,
    updatedUser_status int not null,
    updatedUser_created_at DATE not null,
    added_date timestamptz  default current_timestamp
);


CREATE OR REPLACE FUNCTION updateFn() 
RETURNS TRIGGER
LANGUAGE plpgsql
AS 
$$
BEGIN
 
 IF 
    NEW.user_name <> OLD.user_name
  THEN
    INSERT INTO archiveUpdate(
      updatedUser_id, 
      updatedUser_name, 
      updatedUser_password,
      updatedUser_status, 
      updatedUser_created_at
       ) VALUES (
        OLD.user_id,
        OLD.user_name,
        OLD.user_password,
        OLD.user_status,
        OLD.created_at
       );
      END IF ;
      RETURN NEW;

END
$$;

CREATE TRIGGER  updateTrigger
AFTER UPDATE
ON users 
FOR EACH ROW
EXECUTE PROCEDURE updateFn();

-- sqlda string concating qlsh || js degi or operatori 