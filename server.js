//npm init -y
//npm install express
//npm install method-override (para hacer peticiones PUT y DELETE desde html. Paquete no necesairo ya que las peticiones se hacen con API FETCH )

//inicializar express
const express = require("express");
const app = express();
//para poder utilizar delet metohd
const methodOverride = require('method-override')

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//importo el router (index.js)
const router = require("./routes") 

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//levanto el servidor
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Servidor escuchando el puerto: ${server.address().port}`);
});

server.on("error", (error) => `El servidor a tenido un error:${error}`);