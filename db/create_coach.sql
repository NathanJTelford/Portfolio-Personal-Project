INSERT INTO coach_id(username,  email, hash_code, pic) 
values
(
    ${username},
    ${email},
    ${hash},
    ${pic}
)

returning *;