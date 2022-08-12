SELECT (MAX(salary) - MIN(salary)) AS diff_salary FROM hr.employees;

SELECT job_id, AVG(salary) AS Average FROM hr.employees
GROUP BY job_id
ORDER BY Average DESC;

SELECT ROUND(MAX(salary),2) AS `Biggest salaty`, ROUND(MIN(salary),2) AS `Minimun salary`, ROUND(SUM(salary),2) AS `Total salary`, ROUND(AVG(salary),2) AS `Avarage salary` FROM hr.employees;

SELECT COUNT(job_id) AS `Number of IT Programmer` FROM hr.employees
WHERE job_id = 'it_prog';

SELECT job_id, AVG(salary) AS Avarege FROM hr.employees
GROUP BY job_id
ORDER BY Avarege DESC;

#8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de 
#dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

SELECT job_id, SUM(salary) AS somatoria FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

#9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

SELECT job_id, AVG(salary) AS Avarage FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY Avarage DESC;

#10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

-- SELECT job_id, COUNT(department_id) AS num_employees FROM hr.employees
-- GROUP BY job_id
-- ORDER BY num_employees DESC;


SELECT job_id, COUNT(department_id) AS number_employees, AVG(salary) AS Avarage FROM hr.employees
GROUP BY department_id
HAVING number_employees > 10
ORDER BY Avarage DESC;

#11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

SELECT * FROM hr.employees;
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515','777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

#12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees;
WHERE CHAR_LENGTH(first_name) >= 8;

#13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

#14. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

#15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT employee_id, first_name, MONTHNAME(hire_date) FROM hr.employees;

#16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT UCASE(first_name) FROM hr.employees;

#17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT last_name, hire_date FROM hr.employees
WHERE YEAR(hire_date) = 1987 
AND MONTH(hire_date) = 7;

#18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS days FROM hr.employees;
