insert into game(coach_id, game_type)
VALUES(
    ${coach},
    ${game}
)
returning game_type;

insert into game_type(name, coach_id)
VALUES(
    ${name},
    ${coach_id}
)

returning name;

insert into team(team_name)
VALUES(
    ${team}
)
returning team_name;

insert into score_type(name, point_value, game_id)
VALUES(
${scoreName},
${pointValue},
${game_id}
)
returning name, point_value;