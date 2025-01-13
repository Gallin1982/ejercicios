const fs = require('fs')
const http = require('http')
const path = require('path')
const os = require('os')
const url = require('url')

/* fs.readFile('ejemplo.txt', 'utf-8', (e,data)=>{
    if (e) {
        console.log(e);
        return;        
        
    }
    console.log(data);
    

}) 

const content = 'Hola'
fs.writeFile('file.txt', content, (e)=>{
    if (e) {
        console.log(e);
        return;        
        
    }
    console.log('Archivo lleno exitosamente');
    

})

const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')

})

server.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
    
})

const directory = 'user/local/'
const fileName = 'ejemplo.txt'
const fullPath = path.join(directory,fileName)
console.log(fullPath);


console.log('Plataforma', os.platform());
console.log('CPU Arquitectura:', os.arch());
console.log('Memoria:', os.totalmem());
console.log('Memoria libre', os.freemem() );*/

/* const miUrl = new URL('https://ejemplo.com:8080/path/nombre?query=hola#hash')
console.log('Host', miUrl.host);
console.log('Nombre de la ruta', miUrl.pathname);
console.log('Parametros', miUrl.searchParams.get('query')); */

