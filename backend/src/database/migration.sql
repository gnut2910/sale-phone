CREATE DATABASE phone_shop;

USE phone_shop;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(500) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

