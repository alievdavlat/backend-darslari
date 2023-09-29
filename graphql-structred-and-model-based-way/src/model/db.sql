

CREATE TABLE Categories (
  category_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_title VARCHAR(64) NOT NULL
  created_at TIMESTAMPTz DEFAULT current_timestamp
);


CREATE TABLE subcategories (
  subcategory_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  subcategory_title VARCHAR(64) NOT NULL,
  category_id uuid REFERENCES Categories(category_id)
  screated_at TIMESTAMPTz DEFAULT current_timestamp

);


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";




INSERT INTO Categories(category_title) VALUES ('Kiimlar');
INSERT INTO Categories(category_title) VALUES ('Kitoblar');
INSERT INTO Categories(category_title) VALUES ('');
INSERT INTO Categories(category_title) VALUES ('');





INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Bolalar kiyimi', '35e987a9-adf2-42f6-a994-75e280154f9c');
INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Erkaklar Kiyimi', '35e987a9-adf2-42f6-a994-75e280154f9c');
INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Ayalor Kiyimi', '35e987a9-adf2-42f6-a994-75e280154f9c');
INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Fentezi', '1c414901-f291-4286-b7bc-2f30a7623830');
INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Ertak', '1c414901-f291-4286-b7bc-2f30a7623830');
INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Detektiv', '1c414901-f291-4286-b7bc-2f30a7623830');
INSERT INTO subcategories(subcategory_title,category_id) VALUES ('Fantastika' , '1c414901-f291-4286-b7bc-2f30a7623830');
