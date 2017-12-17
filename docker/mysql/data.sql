/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`jodd-tutorial` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `jodd-tutorial`;


CREATE TABLE jd_message (
    message_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    text VARCHAR(1000) NOT NULL,
    PRIMARY KEY (message_id)
);
CREATE TABLE jd_response (
    response_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    text VARCHAR(1000) NOT NULL,
    message_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (response_id),
    FOREIGN KEY (message_id) REFERENCES jd_message(message_id)
);

insert  into `jd_message`(`message_id`,`text`) values (1,'Welcome! This is the very first message!');
insert  into `jd_response`(`response_id`,`text`, `message_id`) values (1,'And this is the very first reply!', 1);
insert  into `jd_response`(`response_id`,`text`, `message_id`) values (2,'Why not the second reply :)', 1);

insert  into `jd_message`(`message_id`,`text`) values (2,'The second message is not bad at all.');
insert  into `jd_response`(`response_id`,`text`, `message_id`) values (3,'Of course:)', 2);

insert  into `jd_message`(`message_id`,`text`) values (3,'This is the last message w/o replies (yet).');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
