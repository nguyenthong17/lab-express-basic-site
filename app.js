//set up with Express
const express = require('express');
const router = express();
const port = 3000;

//register the public folder so the client can use
router.use(express.static(__dirname + '/public'));

//send homepage file
router.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
})

router.get('/about', (request,response) => {
    response.sendFile(__dirname + '/views/about.html')
})

router.get('/works', (req,res) => {
    res.sendFile(__dirname + '/views/works.html')
})

router.get('/vim', (req,res) => {
    res.sendFile(__dirname + '/views/vim.html')
})
router.listen(port, () => {
    console.log(`waiting for request on ${port}`);
})