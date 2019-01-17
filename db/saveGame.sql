insert into game(
    coach_id,
    game_type
)
VALUES
(
    ${coach},
    ${game_type}
)
 insert into game_type(
     name,
     coach_id
 )
 VALUES
 (
     ${name},
     ${coach_id}
 )
 insert into team(
     team_name
 )
 VALUES
 (
     ${team_name}
 )

 insert into score_type(
     name,
     point_value,
     game_id
 )
 VALUES
 (
     ${name},
     ${point_value},
     ${game_id}
 )