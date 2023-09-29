
CREATE TABLE restaraunts (
  id serial not null PRIMARY KEY,
  name varchar(100) not null 
);



CREATE TABLE branches (
  id serial not null PRIMARY KEY,
  name varchar(100) not null , 
  restaraunt_id int ,
  FOREIGN KEY (restaraunt_id) REFERENCES restaraunts(id)
  ON DELETE CASCADE
); 

alter table restaraunts alter column created_at timestamptz default current_timestamp ;


INSERT INTO branches (name, restaraunt_id) VALUES ('oqtepa sergeli', 2) ;
INSERT INTO branches ( name, restaraunt_id) VALUES ('oqtepa chilonzor', 2) ;
INSERT INTO branches ( name, restaraunt_id) VALUES ('oqtepa yangiyol', 2) ;


INSERT INTO restaraunts ( name, address ) VALUES ('evos', 'yangiyol shahar') ;


ALTER TABLE users ADD COlUMN  password int ;

UPDATE users
SET password = 'toshpolat123'
WHERE id = 8;