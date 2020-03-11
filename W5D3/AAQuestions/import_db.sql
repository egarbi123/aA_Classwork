PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  associated_author_id INTEGER NOT NULL,

  FOREIGN KEY (associated_author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  subject_question_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  parent_reply_id INTEGER,

  FOREIGN KEY (parent_reply_id) REFERENCES replies(id)
  FOREIGN KEY (subject_question_id) REFERENCES questions(id)
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Eyal', 'Garbi');

INSERT INTO
  users (fname, lname)
VALUES
  ('Brian', 'Wan');

INSERT INTO
  users (fname, lname)
VALUES
  ('Tj', 'Mccabe');

INSERT INTO
  users (fname, lname)
VALUES
  ('Darrick', 'Yong');

INSERT INTO
  users (fname, lname)
VALUES
  ('Brittany', 'Hasty');

INSERT INTO
  questions (title, body, associated_author_id)
VALUES
  ('SQL', 'How do you write a query?', 3);

INSERT INTO
  questions (title, body, associated_author_id)
VALUES
  ('HTML', 'What is the difference between block and inline-block?', 1);

INSERT INTO
  questions (title, body, associated_author_id)
VALUES
  ('HTML', 'How to use div tags?', 2);

INSERT INTO
  questions (title, body, associated_author_id)
VALUES
  ('SQLite3', 'How come inserting doesn''t work?', 2);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (1, 3);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  (2, 2);

INSERT INTO
  replies (subject_question_id, body, user_id, parent_reply_id)
VALUES
  (2, 'Block takes up full width, and inline-block only takes the width it absolutely needs', 2, NULL);

INSERT INTO
  replies (subject_question_id, body, user_id, parent_reply_id)
VALUES
  (3, 'It''s complicated, go check out https://www.youtube.com/watch?v=-XQlr727A8w', 4, NULL);

INSERT INTO
  question_likes (user_id, question_id)
VALUES
  (1, 3);

INSERT INTO
  question_likes (user_id, question_id)
VALUES
  (2, 2);

  