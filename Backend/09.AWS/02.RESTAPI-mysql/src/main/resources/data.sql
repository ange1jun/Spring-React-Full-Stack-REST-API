-- insert into user_details(id, birthdate, name)
-- values(10001, current_date, 'jisoo');
--
-- insert into user_details(id, birthdate, name)
-- values(10002, current_date, 'minji');
--
-- insert into user_details(id, birthdate, name)
-- values(10003, current_date, 'sohee');
--
-- insert into post(id, user_id, description)
-- values(20001, 10001, 'Learn AWS');
--
-- insert into post(id, user_id, description)
-- values(20002, 10002, 'Learn Azure');
--
-- insert into post(id, user_id, description)
-- values(20003, 10001, 'Learn GoogleCloud');
--
-- insert into post(id, user_id, description)
-- values(20004, 10002, 'Get AWS Certified');

insert into user_details(id,birth_date,name)
values(10001, current_date(), 'Ranga');

insert into user_details(id,birth_date,name)
values(10002, current_date(), 'Ravi');

insert into user_details(id,birth_date,name)
values(10003, current_date(), 'Sathish');

insert into post(id,description,user_id)
values(20001,'I want to learn AWS', 10001);

insert into post(id,description,user_id)
values(20002,'I want to learn DevOps', 10001);

insert into post(id,description,user_id)
values(20003,'I want to Get AWS Certified', 10002);

insert into post(id,description,user_id)
values(20004,'I want to learn Multi Cloud', 10002);