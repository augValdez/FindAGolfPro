/////////////// connecting to postgreSQL
const{Pool, Client} = required('pg')
const connectionString = 'postgressql://postgres:Misty0101@localhost:5432/postgres'

const client = new Client({
    connectionString:connectionString
})

client.connect()
client.query('SELECT * from public.Course',(err,res)=>{
    console.log(err,res)
    client.end()
})
//////////////////////////