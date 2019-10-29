collection.id collection.user_id collection.liquor_id collection.date_bought collection.balance

users.id users.username

liquor.id liquor.name liquor.type

SELECT collection.id,collection.user_id,collection.liquor_id,collection.date_bought,collection.balance,liquor.name,liquor.type
FROM collection
INNER JOIN liquor
ON collection.liquor_id = liquor.id
WHERE collection.id=1

SELECT collection.id,collection.user_id,collection.liquor_id,collection.date_bought,collection.balance,liquor.name,liquor.type
FROM collection
INNER JOIN liquor
ON collection.liquor_id = liquor.id
WHERE collection.user_id=6
ORDER BY balance ASC

SELECT users.username,notes_count.user_id,notes_count.count AS notes_count,collection_count.count AS collection_count
FROM users
LEFT JOIN (
SELECT user_id, COUNT(*)
FROM notes
GROUP BY user_id
) AS notes_count
ON users.id = notes_count.user_id
LEFT JOIN (
SELECT user_id, COUNT(*)
FROM collection
GROUP BY user_id
) AS collection_count
ON users.id = collection_count.user_id