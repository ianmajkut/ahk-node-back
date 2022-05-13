import { Opcion } from "./model/entities/preguntas/Opcion";
import { Pregunta } from "./model/entities/preguntas/Pregunta";

let unaPregunta = new Pregunta();
unaPregunta.setLeyenda("¿Hoy es 13 de mayo?");

let opcionSi = new Opcion();
opcionSi.setDescripcion("Si");
opcionSi.setEsCorrecta(true);

let opcionNo = new Opcion();
opcionNo.setDescripcion("No");
opcionNo.setEsCorrecta(false);

unaPregunta.agregarOpcion(opcionSi);
unaPregunta.agregarOpcion(opcionNo);

const http = require('http');

const server = http.createServer((req: any, res:any) => {
    console.log('Request was made: ' + req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(unaPregunta));
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000');
});