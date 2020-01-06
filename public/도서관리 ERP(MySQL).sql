CREATE TABLE `Book` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(255),
  `isbn` varchar(255),
  `title` varchar(255),
  `author` varchar(255),
  `translator` varchar(255),
  `publisher` varchar(255),
  `published_date` timestamp,
  `thumnail` varchar(255),
  `use_yn` varchar(255),
  `reservation_yn` varchar(255),
  `created_date` timestamp,
  `updated_date` timestamp
);

CREATE TABLE `Appendix` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `book_id` varchar(255),
  `name` varchar(255)
);

CREATE TABLE `RENTAL` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sabun` varchar(255),
  `book_id` int,
  `status` varchar(255),
  `rental_date` timestamp,
  `return_date` timestamp,
  `created_date` timestamp,
  `updated_date` timestamp
);

CREATE TABLE `RENTAL_HISTORY` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sabun` varchar(255),
  `book_id` int,
  `status` varchar(255),
  `created_date` timestamp
);

CREATE TABLE `CLASSIFICATION` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `RESERVATION` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `book_id` varchar(255),
  `sabun` varchar(255),
  `start_date` timestamp,
  `end_date` timestamp,
  `renew_status` varchar(255),
  `renew` varchar(255)
);

CREATE TABLE `RESERVATION_DAY` (
  `reserv_id` int,
  `sabun` varchar(255),
  `day` timestamp
);

ALTER TABLE `Book` ADD FOREIGN KEY (`code`) REFERENCES `CLASSIFICATION` (`id`);

ALTER TABLE `Appendix` ADD FOREIGN KEY (`book_id`) REFERENCES `Book` (`id`);

ALTER TABLE `RENTAL` ADD FOREIGN KEY (`book_id`) REFERENCES `Book` (`id`);

ALTER TABLE `RENTAL_HISTORY` ADD FOREIGN KEY (`book_id`) REFERENCES `Book` (`id`);

ALTER TABLE `RESERVATION` ADD FOREIGN KEY (`book_id`) REFERENCES `Book` (`id`);

ALTER TABLE `RESERVATION_DAY` ADD FOREIGN KEY (`reserv_id`) REFERENCES `RESERVATION` (`id`);
