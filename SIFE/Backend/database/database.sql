-- Create the database
CREATE DATABASE Company;

-- Switch to the newly created database
USE Company;

-- Create the testimonials table
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    review TEXT NOT NULL,
    designation VARCHAR(250)
);

-- Create the galert table
CREATE TABLE galert (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    galert_feature1 VARCHAR(255),
    galert_feature2 VARCHAR(255),
    galert_feature3 VARCHAR(255),
    galert_spec1 VARCHAR(255),
    galert_spec2 VARCHAR(255),
    galert_spec3 VARCHAR(255),
    galert_use1 VARCHAR(255),
    galert_use2 VARCHAR(255),
    galert_use3 VARCHAR(255)
);

-- Create the feaut table (possible typo in table name? Maybe "feature"?)
CREATE TABLE feaut (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    feaut_feature1 VARCHAR(255),
    feaut_feature2 VARCHAR(255),
    feaut_feature3 VARCHAR(255),
    feaut_spec1 VARCHAR(255),
    feaut_spec2 VARCHAR(255),
    feaut_spec3 VARCHAR(255),
    feaut_use1 VARCHAR(255),
    feaut_use2 VARCHAR(255),
    feaut_use3 VARCHAR(255)
);

-- Sample selects to check the contents
SELECT * FROM testimonials;
SELECT * FROM galert;
SELECT * FROM feaut;
