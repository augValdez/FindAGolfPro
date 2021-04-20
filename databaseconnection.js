const { Client } = require('pg');


DATABASE_HOST="localhost"
DATABASE="postgres"
DATABASE_USERNAME="my_user"
DATABASE_PASSWORD="root"

const client = new Client({
    host: DATABASE_HOST,
    port: 5432,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE
})

client.connect();

client.query('SELECT * FROM course;', (err, result) => {
    if(!err) {
        console.log("did it fucking run this?")
        console.log(result.rows);
    }
    client.end();
})
