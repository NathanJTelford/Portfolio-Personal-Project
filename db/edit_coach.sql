update coach_id
set
  username =  ${username},
  email =  ${email},
  pic =  ${pic},
   hash_code = ${pass}
   where coach_id = ${id}
   returning *;
