
create table transactions (

tid int not null auto_increment,
uid int,
amount float,
description varchar(500),
modeOfTransfer varchar(100),
added_date timestamp,
modified_date timestamp,
modified_by varchar(200),
primary key(tid)
)
