  -- iwlatvotganda oziz tablarizi qoyb ishlatb korin queryni
  
  SELECT 
    h.homework_id AS id ,
    h.homework_title AS title,
    h.homework_content AS content

  FROM 
    groups g
  INNER JOIN 
    homeworks h
  ON  
    g.group_id = h.group_id

    
  SELECT 
      u.user_id,
      u.user_name 
  FROM 
      student_groups sg
  INNER JOIN 
      users u 
  ON  
      sg.student_id = u.user_id;



      SELECT
          je.job_id,
          jobs.title,
          json_agg(
              json_build_object(
                'id', e.id,
                'name', e.name
              )
          ) AS empolyers
          
      FROM
          job_employers je
      INNER JOIN 
          jobs
      ON
          jobs.id = je.job_id
      LEFT JOIN
          employers e
      ON
          je.employer_id = e.id
      GROUP BY
          je.job_id,
          jobs.title;


 SELECT
          je.job_id,
          jobs.title,
          array_agg(
              array_build_object(
                'id', e.id,
                'name', e.name
              )
          ) AS empolyers
          
      FROM
          job_employers je
      INNER JOIN 
          jobs
      ON
          jobs.id = je.job_id
      LEFT JOIN
          employers e
      ON
          je.employer_id = e.id
      GROUP BY
          je.job_id,
          jobs.title;
