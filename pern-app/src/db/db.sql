DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE  users (
  user_id serial not null PRIMARY KEY,
  user_name varchar(64) not null,
  user_password varchar(32) not null,
  user_status int not null DEFAULT 4,
  created_at timestamptz default current_timestamp
);


CREATE TABLE groups (
  group_id serial not null PRIMARY KEY,
  group_title varchar(32) not null,
  teacher_ref_id int not null REFERENCES users(users_id),
  created_at timestamptz default current_timestamp
);

DROP TABLE IF EXISTS student_groups ;


CREATE TABLE student_groups (
  student_group_id serial not null PRIMARY KEY,
  student_id int REFERENCES users(users_id),
  group_id int REFERENCES groups(group_id)
);

DROP TABLE IF EXISTS homeworks ;


CREATE TABLE homeworks (
  homework_id serial not null PRIMARY KEY,
  homework_title varchar(64) not null,
  homework_content text not null,
  created_at timestamptz default current_timestamp,
  group_id int REFERENCES groups(group_id)

);


insert into users (user_name, user_password, user_status) values ('aziz', 'aziz123', 3);
insert into users (user_name, user_password, user_status) values ('samar badridinov', 'samar123', 3);



insert into users (user_name, user_password) values ('shohjohan', 'shoqi123');
insert into users (user_name, user_password) values ('bahtiyor', 'baha123');


insert into groups (group_title,teacher_ref_id) values ('backend 124', 1) ;
insert into groups (group_title,teacher_ref_id) values ('frontend 121', 1) ;
insert into groups (group_title,teacher_ref_id) values ('backend 26', 2) ;


insert into student_groups (student_id, group_id) values (3, 1);
insert into student_groups (student_id, group_id) values (3, 2);
insert into student_groups (student_id, group_id) values (4, 3);



insert into homeworks ( homework_title, homework_content, group_id ) values ('expressjs', 'w3schols', 1) ;
insert into homeworks ( homework_title, homework_content, group_id ) values ('javascript', 'mdn web docs', 1) ;
insert into homeworks ( homework_title, homework_content, group_id ) values ('reactjs', 'w3schols', 2) ;
insert into homeworks ( homework_title, homework_content, group_id ) values ('nodejs intro', 'w3schols', 3) ;
insert into homeworks ( homework_title, homework_content, group_id ) values ('psotgresql', 'w3schols', 3) ;