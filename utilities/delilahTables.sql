CREATE DATABASE delilah;

USE delilah;

CREATE TABLE user(
    id_user INT NOT NULL AUTO_INCREMENT,
	user VARCHAR(20) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone BIGINT NOT NULL,
    address VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    rol VARCHAR(5) NOT NULL,
    PRIMARY KEY(user)
);

CREATE TABLE menus (
    id_menu INT NOT NULL AUTO_INCREMENT,
    menu_name VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    availability VARCHAR(3) NOT NULL,
    PRIMARY KEY(id_menu)
);

CREATE TABLE delivery_status (
	id_delivery_status INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_delivery_status)
);

CREATE TABLE payment_method (
	id_payment_method INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_payment_method)
);

CREATE TABLE delivery (
    id_delivery INT NOT NULL AUTO_INCREMENT,
	id_user INT NOT NULL,
    address_to_deliver VARCHAR(50) NOT NULL,
    id_delivery_status INT NOT NULL,
    id_payment_method INT NOT NULL,
    time_event DATETIME NOT NULL,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (id_user) REFERENCES user(id_user),
    FOREIGN KEY (id_delivery_status) REFERENCES delivery_status(id_delivery_status),
    FOREIGN KEY (id_payment_method) REFERENCES payment_method(id_payment_method)
);


CREATE TABLE delivery_pedido (
    id_delivery INT NOT NULL,
	id_menu INT NOT NULL,
    quantity TINYINT NOT NULL,
    PRIMARY KEY(id_delivery, id_menu),
    FOREIGN KEY (id_delivery) REFERENCES delivery(id_delivery),
    FOREIGN KEY (id_menu) REFERENCES menus(id_menu)
);