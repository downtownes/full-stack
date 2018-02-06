INSERT INTO users
(username, email, image, auth_id)
VALUES
($1, $2, $3, $4)
RETURNING *;