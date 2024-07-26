const express = require('express')

const server = express()

server.get('/',(req,res)=>{
    res.send('Haro evryuan! Oh! How a yu fain sank yu. Oh ma gah')
})

server.listen(3000)