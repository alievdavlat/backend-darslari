-- CASE
    -- WHEN ... THEN ... ELSE ...
-- END


SELECT 
        user_id,
        user_name ,
    CASE
            WHEN user_status = 3 THEN 'o`qtuvchi'
    ELSE
            'o`quvchi'
    END AS role
FROM
users;

insert into users(user_name, user_password, user_status) values ('durdona', 'duri123', 2) ;

    -- multiple conditon
 
SELECT 
        user_id,
        user_name ,
    CASE
            WHEN user_status = 3 THEN 'o`qtuvchi'
            WHEN user_status = 2 THEN 'admin'
            WHEN user_status = 1 THEN 'super-admin'
    ELSE
            'o`quvchi'
    END AS role
FROM
users;



 -- multiple case

    SELECT 
        user_id,
        user_name ,
    CASE 
        WHEN LENGTH(user_name) > 4 THEN 'qotag`i kotda' 
    ELSE 'shohi bor'
    END AS laqabi,
    CASE
            WHEN user_status = 3 THEN 'o`qtuvchi'
            WHEN user_status = 2 THEN 'admin'
            WHEN user_status = 1 THEN 'super-admin'
    ELSE
            'o`quvchi'
    END AS role

    FROM
    users;


    -- case with agregat functions
    
    -- userlani qaysi role da nechta odam borlligini topsh
    SELECT 
        SUM(
             CASE  WHEN user_status = 3 THEN 1 ELSE  0 END 
        ) AS oqtuchilar ,
        SUM(
            CASE WHEN user_status = 4 THEN 1 ELSE 0 END
        ) AS oquvchilar,
        SUM(
            CASE WHEN user_status = 2 THEN 1 ELSE 0 END
        ) AS adminlar
    FROM 
        users;


    -- case with update query

    update users  set user_name = (
        case 
            when true then 'azizbek' else ( select  user_name from users where user_id = 1 ) 
        end
    ),
    user_password = (
        case 
            when true then 'aziz1234' else ( select  user_password from users where user_id = 1 ) 
        end
    )
where user_id = 1 ;

-- adding extension in postgres

CREATE EXTENSION IF NOT EXISTS pgcrypto ;


-- hashing password
select crypt('eshmat123', gen_salt('bf'));

-- compare password 

select '$2a$06$RqjiV1YLvHbUK51EPGM7UOq0vnHBP87u0hTnkoFv5XFPTmEwqtPfK' = crypt('eshmat123', '$2a$06$RqjiV1YLvHbUK51EPGM7UOq0vnHBP87u0hTnkoFv5XFPTmEwqtPfK');

-- compare in express 
select username = $1 , password = crypt($2, password);

-- hashing in express

insert into users (user_name, user_password) values('hoshm', crypt('hoshm123', gen_salt('bf'))) ;