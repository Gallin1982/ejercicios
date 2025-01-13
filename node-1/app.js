const fs = require('fs')
const http = require('http')

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
    
})*/