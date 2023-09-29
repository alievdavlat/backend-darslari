

-- AGREGAT FUNTIONS
    -- MAX , MIN , AVG , SUM , COUNT, CAST


SELECT MAX(age) FROM users ;
SELECT MIN(age) FROM users ;
SELECT AVG(age) FROM users ;
SELECT COUNT(user_password) FROM users WHERE user_password  IS NOT NULL;
SELECT SUM(user_password) FROM users ;

-- sub query -> query ichida query yozish

SELECT * FROM users WHERE age = ( SELECT MAX(age) FROM users) ;


-- sqlda type conversions

    SELECT CAST(AVG(age) AS int ) FROM users ; 
    SELECT AVG(age)::int  AS AGE FROM users ; 
    
    -- decimal(10, 1 ) type bu jsdegi toFixed 

    -- USING()
    -- FETCH
    -- SUBQUERY


    SELECT * FROM posts INNER JOIN comments USING(post_id) ; 

    SELECT 
        c.id ,
        c.title ,
        c.price ,
        COUNT(sub.id) AS subcourse
    FROM 
        courses c
    LEFT JOIN 
        courses sub 
    ON 
        c.id = sub.courseid
    GROUP BY 
        c.id , c.title
    ORDER BY 
        c.id 
    OFFSET 3 ROWS FETCH FIRST 3 ROW ONLY;


    SELECT id , title FROM courses WHERE id IN( 1, 2) ;
    SELECT id , title FROM courses WHERE id NOT IN( 1, 2) ;
    SELECT id , title, price FROM courses WHERE price IN( SELECT MAX(price) FROM courses ) ;

        SELECT id , title, price FROM courses WHERE price IN(
            (SELECT MAX(price) FROM courses) ,
            (SELECT MIN(price) FROM courses)   
        );

         SELECT id , title, price FROM courses WHERE price NOT IN(
          
            (SELECT MIN(price) FROM courses)   
        );

           SELECT id , title, price FROM courses WHERE price <> (
          
            (SELECT MIN(price) FROM courses)   
        );


        --BETWEN 
       SELECT id , title, price FROM courses WHERE price BETWEEN 60000 AND 800000 ;


       -- REPLACE 

        SELECT  REPLACE( price , ' ', '') :: int FROM courses ;