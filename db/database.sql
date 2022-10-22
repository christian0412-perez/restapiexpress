CREATE DATABASE IF NOT EXISTS usersdb;
USE usersdb;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL, 
    age INT(4) DEFAULT NULL,
    PRIMARY KEY (id)
);

describe user;

INSERT INTO user values 
  (1, 'Ryan Ray', 23),
  (2, 'Joe McMillan', 22),
  (3, 'John Carter', 12);

SELECT * FROM user;