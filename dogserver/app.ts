const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    data = require('./taskData.json');


app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/dataPeek', (req: any, res: any) => {
    res.json(data)
})

app.get('/testAPI', (req:any, res:any, next:any) => {
    res.send('API is working properly');
});

app.get('/', (req: any, res: any) => {
  res.send('Hello from dog server!')
})

const noteArray: string[] =[] 

app.post('/notes', (req:any, res:any) => {
    noteArray.push(req.body)
    res.send('Got a POST request')
    res.sendStatus(200)
})

app.get('/notes', (req: any, res: any) => {
    res.send(noteArray)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})