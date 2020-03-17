/**Aplicacion de muestra para crear un servidor web. Utilizamos la libreria por defecto de node http */
const http = require('http');

/**Primero debemos crear el servidor, este metodo es un callback que recibe una peticion y respuesta como argumentos de entrada. */
http.createServer((req, res) => {
    /**cuando se crea el servidor. Este nos reponde con una página web con todos los elementos que este conlleva. Por lo que nosotros podemos obtar por retornar un objeto JSON con información de la siguiente manera */
    let info = {
        nombre: 'Luis',
        apellido: 'Ronquillo',
        url: req.url //de la petición podemos obtener la url que ingresa el usuario
    }

    res.write(JSON.stringify(info));
    res.end(); //es necesario terminar el proceso de respuesta. De otra manera, el servidor se quedaria colgado esperando a que la peticion del usuario termine.

}).listen(8080); //aqui le indicamos al servidor el puerto que va escuchar

console.log('escuchado puerto 8080');