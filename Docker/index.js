const app = require('express')();

app.get('/', (req,res) => {
    res.send('Welcome to the docker App..')
})

app.get('/about',(req,res)=>{
    res.send(process.env.API_KEY)
})
app.listen(4000, () => {
    console.log('Server is live on Port 4000 !!')
})