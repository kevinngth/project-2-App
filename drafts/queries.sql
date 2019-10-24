collection.id collection.user_id collection.liquor_id collection.date_bought collection.balance

users.id users.username

liquor.id liquor.name liquor.type

SELECT collection.id,collection.user_id,collection.liquor_id,collection.date_bought,collection.balance,liquor.name,liquor.type
FROM collection
INNER JOIN liquor
ON collection.liquor_id = liquor.id
WHERE collection.user_id=1