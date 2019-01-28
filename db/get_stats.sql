select * from game 
join coach_id on coach_id.coach_id = game.coach_id
where game.coach_id = ${id}