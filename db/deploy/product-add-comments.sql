-- Deploy spidertutorial:product-add-comments to pg

BEGIN;

-- XXX Add DDLs here.
alter table products add comments varchar(100) default 'default comments';

COMMIT;
