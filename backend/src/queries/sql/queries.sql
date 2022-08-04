-- name: get-orders
SELECT *
 FROM orders
 order by delivery_date asc;

-- name: get_order_by_id
SELECT (order_id, number, price_usd, delivery_date)
 FROM orders
 WHERE order_id = :order_id;

-- name: create-order
INSERT INTO orders (number, price_usd, delivery_date)
 VALUES (:number, :price_usd, :delivery_date);

-- name: update-order
UPDATE orders
 SET number = :number,
     price_usd = :price_usd,
     delivery_date = :delivery_date
 WHERE order_id = :order_id;
