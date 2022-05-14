const express = require("express");
const app = express();
const port = 3001;

app.get('/', (request, response) => {
    response.send(`Hello World`);

})

app.get('/info', (request, response) => {
    const notes = [{
        text: "Hassan",
        link: "Sofware Developer"
    },
    {
        text: "Mohsin",
        link: "Sofware Developer"
    }];
    response.json({ notes });

})
app.listen(port, () => {
    console.log(`Sever is Running on port ${port}`)
})