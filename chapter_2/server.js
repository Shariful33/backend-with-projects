//The address of this server connected to the network is: http://localhost:8383
//IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ["Shariufl"]

// Middleware
app.use(express.json())

//ENDPOINT- HTTP VERBS & Routes( or paths )
//The mehtod informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropiately, and these locations or routes are called endpoints)

//Type 1 - website endpints ( these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/',(req,res)=>{
    // this is endpoint number 1 - /
    console.log('User request the home page website. Mthod: ',req.method)
    //res.sendStatus(201)
    // res.send('<h1>Homepage </h1>' )
    res.send(`
        <body style="background: grey; color:blue;">
            <h1>Data: <h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>

        `)

})

app.get('/dashboard',(req,res)=>{
    console.log('ohhh now i hit the /dashboard endpoint')
    res.send(`
        <body>
        <a href="/">Home</a>
        <h1>Dashboard<h1/>
        </body>
    `)
})

//CRUD(method)-  create(post)  read(get) update(put) and delete(delete)


//Type -2 API endpoints (non visual)

app.get('/api/data', (req,res)=>{
    console.log('This one was for data')
    res.status(599).send(data)
})


app.post('/api/data',(req,res)=>{
    //someone wnats to create a user (for example when they click a sign up button)
    //the user clicks the sign up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
     res.sendStatus(201)
})

app.delete('/api/data', (req,res) => {
    data.pop()
    console.log("We deleted the element off the end of the array")
    res.sendStatus(203)
})

app.listen(PORT,()=> console.log(`Server has started on : ${PORT}`))