SELECT CONCAT(first_name, '', last_name) AS 'name_completo' FROM sakila.actor;

SELECT CONCAT(title, '-',release_year ) AS 'lançamento_do_filme' FROM sakila.film;

CREATE DATABASE Escola;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    nome VARCHAR(7) CHARACTER SET utf8,
    idade INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
SELECT DISTINCT * FROM Escola.Estudantes;     
SELECT DISTINCT nome idade FROM Escola.Estudantes; 
SELECT DISTINCT nome FROM Escola.Estudantes; 
SELECT COUNT(DISTINCT idade) FROM Escola.Estudantes
WHERE idade=25;


SELECT COUNT(password) FROM sakila.staff;
SELECT COUNT(first_name) FROM sakila.staff;
SELECT COUNT(email) FROM sakila.staff;

SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

SELECT * FROM sakila.film;

