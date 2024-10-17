USE `EnricBBDD`;

INSERT INTO `Genre` (Genre) VALUES
('Rock'),
('Pop'),
('Jazz'),
('Classical'),
('Hip-Hop'),
('Reggae'),
('Blues'),
('Electronic'),
('Country'),
('Metal');

INSERT INTO `Album` (albumName, dateReleased) VALUES
('Abbey Road', '1969-09-26 00:00:00'),
('Thriller', '1982-11-30 00:00:00'),
('The Dark Side of the Moon', '1973-03-01 00:00:00'),
('Back in Black', '1980-07-25 00:00:00'),
('Hotel California', '1976-12-08 00:00:00'),
('Rumours', '1977-02-04 00:00:00'),
('The Wall', '1979-11-30 00:00:00'),
('Born to Run', '1975-08-25 00:00:00'),
('Sgt. Pepper’s Lonely Hearts Club Band', '1967-05-26 00:00:00'),
('The Joshua Tree', '1987-03-09 00:00:00');

INSERT INTO `Artist` (artistName) VALUES
('The Beatles'),
('Michael Jackson'),
('Pink Floyd'),
('AC/DC'),
('Eagles'),
('Fleetwood Mac'),
('Queen'),
('Bruce Springsteen'),
('The Beatles'),
('U2');

SELECT * FROM `Genre`;
SELECT * FROM `Album`;
SELECT * FROM `Artist`;

INSERT INTO `Genre` (Genre) VALUES
('Folk'),
('Indie'),
('Alternative'),
('Punk'),
('Gospel'),
('R&B'),
('Salsa'),
('Funk'),
('New Age'),
('Ska');

INSERT INTO `Album` (albumName, dateReleased) VALUES
('A Night at the Opera', '1975-11-21 00:00:00'),
('Rumours', '1977-02-04 00:00:00'),
('Bad', '1987-08-31 00:00:00'),
('The Chronic', '1992-11-10 00:00:00'),
('Nevermind', '1991-09-24 00:00:00'),
('The Eminem Show', '2002-05-26 00:00:00'),
('Born to Run', '1975-08-25 00:00:00'),
('The Fame', '2008-08-19 00:00:00'),
('21', '2011-02-24 00:00:00'),
('Random Access Memories', '2013-05-17 00:00:00');

INSERT INTO `Artist` (artistName) VALUES
('Bob Dylan'),
('Radiohead'),
('Taylor Swift'),
('Kendrick Lamar'),
('Drake'),
('Madonna'),
('Beyoncé'),
('Billie Eilish'),
('Elton John'),
('Prince');

SELECT * FROM `Genre`;
SELECT * FROM `Album`;
SELECT * FROM `Artist`;