CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    rating NUMERIC(2,1) NOT NULL DEFAULT 4.5
);

INSERT INTO movies (name, year, rating)
 VALUES ('Titanik', 1996, 4.8),
  ('Abdulla', 1995, 4.7),
  ('Shum bola', 199, 4.7);


  CREATE TABLE reservation (
  id SERIAL PRIMARY KEY,
  car_name VARCHAR(255) NOT NULL,
  "user" VARCHAR(255) NOT NULL,
  total_price INTEGER NOT NULL,
  start_data DATE NOT NULL,
  end_data DATE NOT NULL
);

INSERT INTO reservation (car_name, "user", total_price, start_data, end_data) 
VALUES ('BMW m5', 'John Doe', 1353330, '2024-09-23', '2024-09-30');
