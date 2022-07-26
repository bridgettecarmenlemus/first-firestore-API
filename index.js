import express from 'express'

const app = express();//this gives the next instructions to the following code. it gives the rules. 
const PORT = 3002;
app.use(express.json());

//put our routes here

app.get('/', (req, res)=> {
    res.send('xxxExpress is working!xxx');
})

//gets him ready to give instructiosn 
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`)
})


// sudo 'im the f'ing boss'