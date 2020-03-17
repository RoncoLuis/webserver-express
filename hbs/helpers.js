const hbs = require('hbs');

/**helpers son funciones que se disparan cuando el template lo requiere. En este caso queremos quitar el new.Date() del home y del about: indicando el nombre del metodo seguido de la función*/
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});