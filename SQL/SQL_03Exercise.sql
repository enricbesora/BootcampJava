USE `EnricBBDD`;

CREATE TABLE `Genre` (
    idGenre INT AUTO_INCREMENT PRIMARY KEY,
    Genre VARCHAR(255)
);

CREATE TABLE `Album` (
    idAlbum INT AUTO_INCREMENT PRIMARY KEY,
    albumName VARCHAR(255),
    dateReleased DATETIME
);

CREATE TABLE `Artist` (
    artistId INT AUTO_INCREMENT PRIMARY KEY,
    artistName VARCHAR(255)
);

SHOW TABLES;