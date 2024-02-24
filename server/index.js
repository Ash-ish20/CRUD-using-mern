import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000

app.get('/',(req, res)=>{
    res.send('app is running')
})

app.listen(PORT,()=>{
    console.log(`api is running on http://localhost:${PORT}`);
})