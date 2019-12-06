HOW IT WORKS

GET: This gets the named register from the database. If the requested register  is not
in the database it returns 0.

POST: First it checks to see if the register already exists in the database. If it
does not exits it adds it with its value. If it does exist it updates the value by
adding the new value onto the current value.

DELETE: This deletes a named register and returns 204.

PUT: This updates the value of a named register.
