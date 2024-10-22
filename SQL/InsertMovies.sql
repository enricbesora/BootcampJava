USE movies_db;

-- Shrek 1 -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Shrek', 2001, 7.9, 90, 84, 620000, 484000000);

INSERT INTO directors (name, about) VALUES ('Andrew Adamson', ''), ('Vicky Jenson', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Mike Myers', ''),
('Eddie Murphy', ''),
('Cameron Diaz', ''),
('John Lithgow', '');

INSERT INTO genres (name) VALUES ('Animación'), ('Aventura'), ('Comedia');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM directors WHERE name = 'Andrew Adamson')),
       ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM directors WHERE name = 'Vicky Jenson'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM stars WHERE name = 'Mike Myers')),
       ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM stars WHERE name = 'Eddie Murphy')),
       ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM stars WHERE name = 'Cameron Diaz')),
       ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM stars WHERE name = 'John Lithgow'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM genres WHERE name = 'Animación')),
       ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'Shrek'), (SELECT id FROM genres WHERE name = 'Comedia'));
       
-- Shrek 2 -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Shrek 2', 2004, 7.3, 93, 75, 460000, 920000000);

INSERT INTO directors (name, about)
VALUES ('Kelly Asbury', ''), ('Conrad Vernon', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Mike Myers', ''),
('Eddie Murphy', ''),
('Cameron Diaz', ''),
('Antonio Banderas', '');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM directors WHERE name = 'Andrew Adamson')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM directors WHERE name = 'Kelly Asbury')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM directors WHERE name = 'Conrad Vernon'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM stars WHERE name = 'Mike Myers')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM stars WHERE name = 'Eddie Murphy')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM stars WHERE name = 'Cameron Diaz')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM stars WHERE name = 'Antonio Banderas'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM genres WHERE name = 'Animación')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM genres WHERE name = 'Comedia'));
