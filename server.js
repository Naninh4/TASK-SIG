const express = require("express")
const app = express
app-get('/', (request, response) => {
    response.send("<span style'color: black;'>Hello World</span>" );
})

const PORT = process.env.PORT || 4200; // definindo a porta padrão

app.listen(PORT, () =>{
    console.log("Listenning on port" + PORT);
})