update coach_id
set
  username =  ${username},
  email =  ${email},
  pic =  ${pic},
   where coach_id = ${id}
   returning *;
