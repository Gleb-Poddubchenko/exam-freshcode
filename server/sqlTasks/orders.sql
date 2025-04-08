
DROP TABLE IF EXISTS "Orders";

CREATE TABLE "Orders" (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  amount DECIMAL NOT NULL,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

INSERT INTO "Orders" (user_id, amount, createdAt)
VALUES

(1, 200.00, '2024-12-26'),
(2, 450.00, '2025-01-03'),
(3, 320.00, '2025-01-12'),
(4, 510.00, '2024-12-30'),
(5, 600.00, '2025-01-08'),
(6, 275.00, '2024-12-28'),
(7, 390.00, '2025-01-11'),
(8, 480.00, '2025-01-02'),
(9, 310.00, '2025-01-10'),
(10, 150.00, '2025-01-13'),

(1, 300.00, '2024-12-10'),
(2, 200.00, '2024-11-15'),
(3, 340.00, '2024-11-30'),
(4, 410.00, '2024-12-01'),
(5, 500.00, '2024-11-28'),
(6, 275.00, '2024-10-25'),
(7, 390.00, '2024-09-12'),
(8, 480.00, '2024-11-05'),
(9, 310.00, '2024-11-14'),
(10, 150.00, '2024-11-22');


 SELECT id, "firstName", balance FROM "Users" WHERE role = 'customer';

-- Task 10: Add 10% cashback to customers with orders between Dec 25 and Jan 14
UPDATE "Users"
SET balance = balance + sub.cashback
FROM (
  SELECT user_id, SUM(amount) * 0.10 AS cashback
  FROM "Orders"
  WHERE createdAt BETWEEN '2024-12-25' AND '2025-01-14'
  GROUP BY user_id
) AS sub
WHERE "Users".id = sub.user_id
  AND "Users".role = 'customer';

  SELECT id, "firstName", balance FROM "Users" WHERE role = 'customer';