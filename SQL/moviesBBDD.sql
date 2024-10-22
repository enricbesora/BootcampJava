DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

-- Usar la base de datos recién creada
USE movies_db;

-- Crear la tabla movies
CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    year INT,
    image_url VARCHAR(255),
    certificate VARCHAR(45),
    runtime INT,
    imdb_rating FLOAT,
    description TEXT,
    metascore INT,
    votes INT,
    gross INT
);

-- Crear la tabla directors
CREATE TABLE IF NOT EXISTS directors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    about TEXT,
    CONSTRAINT name_UNIQUE UNIQUE (name)
);

-- Crear la tabla stars
CREATE TABLE IF NOT EXISTS stars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    about TEXT,
    CONSTRAINT star_name_UNIQUE UNIQUE (name)
);

-- Crear la tabla genres
CREATE TABLE IF NOT EXISTS genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    CONSTRAINT genre_name_UNIQUE UNIQUE (name)
);

-- Crear la tabla movies_directors
CREATE TABLE IF NOT EXISTS movies_directors (
    movies_id INT,
    directors_id INT,
    PRIMARY KEY (movies_id, directors_id),
    FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
    FOREIGN KEY (directors_id) REFERENCES directors(id) ON DELETE CASCADE
);

-- Crear la tabla movies_stars
CREATE TABLE IF NOT EXISTS movies_stars (
    movies_id INT,
    stars_id INT,
    PRIMARY KEY (movies_id, stars_id),
    FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
    FOREIGN KEY (stars_id) REFERENCES stars(id) ON DELETE CASCADE
);

-- Crear la tabla movies_genres
CREATE TABLE IF NOT EXISTS movies_genres (
    movies_id INT,
    genres_id INT,
    PRIMARY KEY (movies_id, genres_id),
    FOREIGN KEY (movies_id) REFERENCES movies(id) ON DELETE CASCADE,
    FOREIGN KEY (genres_id) REFERENCES genres(id) ON DELETE CASCADE
);

-- Shrek 1 -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Shrek', 2001, 7.9, 90, 84, 620000, 484000000);

INSERT INTO directors (name, about) VALUES ('Andrew Adamson', ''), ('Vicky Jenson', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Mike Myers', ''),
('Eddie Murphy', ''),
('Cameron Diaz', ''),
('John Lithgow', '');

INSERT IGNORE INTO genres (name) VALUES ('Animación'), ('Aventura'), ('Comedia');

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

INSERT  INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Shrek 2', 2004, 7.3, 93, 75, 460000, 920000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Kelly Asbury', ''), ('Conrad Vernon', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Mike Myers', ''),
('Eddie Murphy', ''),
('Cameron Diaz', ''),
('Antonio Banderas', '');

INSERT IGNORE INTO genres (name) VALUES ('Animación'), ('Aventura'), ('Comedia');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Shrek 2'), (SELECT id FROM directors WHERE name = 'Kelly Asbury')),
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

-- Interestellar -----------

INSERT  INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Interestellar', 2014, 8.6, 169, 74, 1700000, 701000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Christopher Nolan', 'A really good director');

INSERT IGNORE INTO stars (name, about) VALUES 
('Matthew McConaughey', ''),
('Anne Hathaway', ''),
('Jessica Chastain', ''),
('Michael Caine', '');

INSERT IGNORE INTO genres (name) VALUES ('Drama'), ('Aventura'), ('Ciencia Ficción');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM directors WHERE name = 'Christopher Nolan'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM stars WHERE name = 'Matthew McConaughey')),
       ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM stars WHERE name = 'Anne Hathaway')),
       ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM stars WHERE name = 'Jessica Chastain')),
       ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM stars WHERE name = 'Michael Caine'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM genres WHERE name = 'Drama')),
       ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'Interestellar'), (SELECT id FROM genres WHERE name = 'Ciencia Ficción'));
       
-- Castillo ambulante -----------

INSERT  INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('El castillo ambulante', 2004, 8.2, 119, 80, 350000, 235000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Hayao Miyazaki', 'He trully looks depressed');

INSERT IGNORE INTO stars (name, about) VALUES 
('Takuya Kimura', ''),
('Chieko Baisho', ''),
('Akihiro Miwa', ''),
('Tatsuya Gashuin', '');

INSERT IGNORE INTO genres (name) VALUES ('Animación'), ('Aventura'), ('Fantasía');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM directors WHERE name = 'Hayao Miyazaki'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM stars WHERE name = 'Takuya Kimura')),
       ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM stars WHERE name = 'Chieko Baisho')),
       ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM stars WHERE name = 'Akihiro Miwa')),
       ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM stars WHERE name = 'Tatsuya Gashuin'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM genres WHERE name = 'Animación')),
       ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'El castillo ambulante'), (SELECT id FROM genres WHERE name = 'Fantasía'));
       
-- Parasytes -----------

INSERT  INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Parasytes', 2019, 8.6, 132, 96, 600000, 264000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Bong Joon-ho', 'Who');

INSERT IGNORE INTO stars (name, about) VALUES 
('Song Kang-ho', ''),
('Lee Sun-kyun', ''),
('Cho Yeo-jeong', ''),
('Choi Woo-shik', ''),
('Park So-dam', '');

INSERT IGNORE INTO genres (name) VALUES ('Drama'),('Thriller');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM directors WHERE name = 'Bong Joon-ho'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM stars WHERE name = 'Song Kang-ho')),
       ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM stars WHERE name = 'Lee Sun-kyun')),
       ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM stars WHERE name = 'Cho Yeo-jeong')),
	   ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM stars WHERE name = 'Choi Woo-shik')),
       ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM stars WHERE name = 'Park So-dam'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM genres WHERE name = 'Drama')),
       ((SELECT id FROM movies WHERE title = 'Parasytes'), (SELECT id FROM genres WHERE name = 'Thriller'));
       
-- Spider-man 2 -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Spiderman 2', 2004, 7.4, 127, 83, 700000, 788000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Sam Raimi', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Tobey Maguire', ''),
('Kirsten Dunst', ''),
('Alfred Molina', ''),
('James Franco', ''),
('Rosemary Harris', '');

INSERT IGNORE INTO genres (name) VALUES ('Acción'), ('Aventura'), ('Ciencia Ficción');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM directors WHERE name = 'Sam Raimi'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM stars WHERE name = 'Tobey Maguire')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM stars WHERE name = 'Kirsten Dunst')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM stars WHERE name = 'Alfred Molina')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM stars WHERE name = 'James Franco')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM stars WHERE name = 'Rosemary Harris'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM genres WHERE name = 'Acción')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 2'), (SELECT id FROM genres WHERE name = 'Ciencia Ficción'));

-- Spider-man 3 -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Spiderman 3', 2007, 6.3, 139, 59, 500000, 894000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Sam Raimi', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Tobey Maguire', ''),
('Kirsten Dunst', ''),
('James Franco', ''),
('Thomas Haden Church', ''),
('Topher Grace', '');

INSERT IGNORE INTO genres (name) VALUES ('Acción'), ('Aventura'), ('Fantasía');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM directors WHERE name = 'Sam Raimi'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM stars WHERE name = 'Tobey Maguire')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM stars WHERE name = 'Kirsten Dunst')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM stars WHERE name = 'James Franco')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM stars WHERE name = 'Thomas Haden Church')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM stars WHERE name = 'Topher Grace'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM genres WHERE name = 'Acción')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'Spiderman 3'), (SELECT id FROM genres WHERE name = 'Fantasía'));

-- Hamilton -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Hamilton', 2020, 8.4, 160, 90, 250000, NULL);

INSERT IGNORE INTO directors (name, about)
VALUES ('Thomas Kail', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Luis-Manuel Miranda', ''),
('Leslie Odom Jr.', ''),
('Phillipa Soo', ''),
('Renée Elise Goldsberry', ''),
('Daveed Diggs', '');

INSERT IGNORE INTO genres (name) VALUES ('Drama'), ('Historia'), ('Musical');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM directors WHERE name = 'Thomas Kail'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM stars WHERE name = 'Luis-Manuel Miranda')),
       ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM stars WHERE name = 'Leslie Odom Jr.')),
       ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM stars WHERE name = 'Phillipa Soo')),
       ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM stars WHERE name = 'Renée Elise Goldsberry')),
       ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM stars WHERE name = 'Daveed Diggs'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM genres WHERE name = 'Drama')),
       ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM genres WHERE name = 'Historia')),
       ((SELECT id FROM movies WHERE title = 'Hamilton'), (SELECT id FROM genres WHERE name = 'Musical'));

-- Everything Everywhere All at Once -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Everything Everywhere All at Once', 2022, 8.0, 139, 81, 400000, 141000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Daniel Kwan', ''), ('Daniel Scheinert', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Michelle Yeoh', ''),
('Ke Huy Quan', ''),
('Stephanie Hsu', ''),
('Jamie Lee Curtis', ''),
('James Hong', '');

INSERT IGNORE INTO genres (name) VALUES ('Aventura'), ('Ciencia Ficción'), ('Comedia');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM directors WHERE name = 'Daniel Kwan')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM directors WHERE name = 'Daniel Scheinert'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM stars WHERE name = 'Michelle Yeoh')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM stars WHERE name = 'Ke Huy Quan')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM stars WHERE name = 'Stephanie Hsu')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM stars WHERE name = 'Jamie Lee Curtis')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM stars WHERE name = 'James Hong'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM genres WHERE name = 'Aventura')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM genres WHERE name = 'Ciencia Ficción')),
       ((SELECT id FROM movies WHERE title = 'Everything Everywhere All at Once'), (SELECT id FROM genres WHERE name = 'Comedia'));

-- Los increibles -----------

INSERT INTO movies (title, year, imdb_rating, runtime, metascore, votes, gross)
VALUES ('Los increíbles', 2004, 8.0, 115, 90, 600000, 633000000);

INSERT IGNORE INTO directors (name, about)
VALUES ('Brad Bird', '');

INSERT IGNORE INTO stars (name, about) VALUES 
('Craig T. Nelson', ''),
('Holly Hunter', ''),
('Samuel L. Jackson', ''),
('Jason Lee', ''),
('Sarah Vowell', '');

INSERT IGNORE INTO genres (name) VALUES ('Animación'), ('Acción'), ('Aventura');

INSERT INTO movies_directors (movies_id, directors_id)
VALUES ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM directors WHERE name = 'Brad Bird'));

INSERT INTO movies_stars (movies_id, stars_id)
VALUES ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM stars WHERE name = 'Craig T. Nelson')),
       ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM stars WHERE name = 'Holly Hunter')),
       ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM stars WHERE name = 'Samuel L. Jackson')),
       ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM stars WHERE name = 'Jason Lee')),
       ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM stars WHERE name = 'Sarah Vowell'));

INSERT INTO movies_genres (movies_id, genres_id)
VALUES ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM genres WHERE name = 'Animación')),
       ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM genres WHERE name = 'Acción')),
       ((SELECT id FROM movies WHERE title = 'Los increíbles'), (SELECT id FROM genres WHERE name = 'Aventura'));






