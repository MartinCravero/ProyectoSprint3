INSERT INTO user (user,fullname,email,phone,address,password,rol) VALUES ("martincho","Martin Cravero","martincravero123@gmail.com","3512300811","Obispo Salguero 668 5e","martincho123","0");
INSERT INTO user (user,fullname,email,phone,address,password,rol) VALUES ("Piojo","Hernan Lopez","piojolopez@gmail.com","351288974","Hipolito Irigoyen 124 14a","piojolopez10","1");


INSERT INTO menus (menu_name,description,price,availability) VALUES ("Hamburguesa","Hamburguesa Doble Cheddar",1000,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Papas","Papas a la carbonara",1800,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Pizza","Napolitana",1200,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Lomito","Lomo completo con papas y extra cheddar",1500,"Yes");

INSERT INTO delivery_status (description) VALUES ("Confirmado");
INSERT INTO delivery_status (description) VALUES ("En preparacion");
INSERT INTO delivery_status (description) VALUES ("En camino");
INSERT INTO delivery_status (description) VALUES ("Entregado");
INSERT INTO delivery_status (description) VALUES ("Cancelado");


INSERT INTO payment_method (description) VALUES ("Efectivo");
INSERT INTO payment_method (description) VALUES ("Tarjeta");