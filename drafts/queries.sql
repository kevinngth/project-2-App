collection.id collection.user_id collection.liquor_id collection.date_bought collection.balance

users.id users.username

liquor.id liquor.name liquor.type

SELECT collection.id,collection.user_id,collection.liquor_id,collection.date_bought,collection.balance
FROM collection
INNER JOIN liquor
ON
WHERE id=1