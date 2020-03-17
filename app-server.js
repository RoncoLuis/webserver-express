/**Con esta libreria se simplifica el código mostrado en app-old.js. Con express podemos realizar las peticiones al webserver de manera mas sencilla */
const express = require('express');
const app = express();
const hbs = require('hbs');
/**Helpers importados de su archivo individual helpers.js */
require('./hbs/helpers');

/**constantes para conocer el puerto que Heroku me asigna */
const port = process.env.PORT || 8080; //si se corre localmente se asgina el puerto 3000

/**Un middleware es un callback que se va ejecutar SIEMPRE no importando el tipo de peticion que el usuario pida al servidor */
app.use(express.static(__dirname + '/public'));

/**Con el registerPartials podemos especificar bloques de codigo reutilizables de nuestro html para usar en toda la aplicacion. Los bloques deben estar dentro de /views/parciales **IMPORTANTE poner el plica antes de views */
hbs.registerPartials(__dirname + '/views/parciales');

/**Para decirle a express que renderize todas nuestras páginas con hbs. Express HBS */
app.set('view engine', 'hbs');



/**esta funcion solicita una peticion GET al servidor, cuando el url es '/' */
app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'Luis Eduardo',
    //     apellido: 'Nodemon',
    //     url: req.url //de la petición podemos obtener la url que ingresa el usuario
    // };

    // /**Internamente la funcion send reconoce el tipo de objeto y lo transforma */
    // res.send(salida);

    /**En lugar de mandar el metodo send. Ahora renderizamos los archivos hbs. Ahora podemos ingresar variables en el template html y modificarlas con hbs */
    res.render('home', {
        nombre: 'lUis rOnquillo',
        // anio: new Date().getFullYear() //metodo para obtener la fecha completa
    });

});

app.set('view engine', 'hbs');

/**Si quiero que se puedan redireccionar otras paginas. Necesito indicar a la peticion get */
app.get('/about', (req, res) => {
    res.render('about', { //aqui se indica la pagina que quieres renderizar
        // anio: new Date().getFullYear() //metodo para obtener la fecha completa
    });
});

// app.get('/data', (req, res) => {
//     let salida = {
//         id: '001',
//         servicio: 'Nodemon',
//         url: req.url
//     };
//     res.send(salida);
// });

/**este listen puede recibir un callback  */
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});

// si deseamos que nodemon este pendiente de los cambios en los archivo debemos ejecutar el comando nodemon app-server.js -e js,hbs,css,html,etc...