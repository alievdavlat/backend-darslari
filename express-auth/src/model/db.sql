CREATE DATABASE auth;


CREATE TABLE users (
  id serial not null PRIMARY KEY ,
  name varchar(65) not null ,
  img text  not null 
) ;

CREATE TABlE comments (
id serial not null PRIMARY KEY,
title varchar(255) not null ,
user_id int REFERENCES users(id)
) ;


