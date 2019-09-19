
const fs = require('fs');
const reqHandler = (req, res) => {
    const url = req.url;

    if(url == '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js</title></head>');
        res.write('<body><form action="/home" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');

        return res.end;
    } else if( url=='/home' && req.method == "POST"){
        const body = [];
        
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            // console.log(parseBody);
        });
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node.js</title></head>');
        res.write('<body><h1>Hello World! from Node.js</h1><p>Your Message Saved to message.txt file </p></body>');
        res.write('</html>');
        return res.end();
    } else{
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<html>');
        // res.write('<head><title>Node.js</title></head>');
        // res.write('<body><h1>Wrong Page</h1></body>');
        // res.write('</html>');
        // setTimeout(()=>{
            res.statusCode = 302;
            res.setHeader('Location', '/sda');
            
        // }, 3000);
        return res.end();
    }
};

module.exports = reqHandler;

