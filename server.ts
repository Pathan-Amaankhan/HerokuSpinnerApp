const express = require('express');

const app = express();

app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});
app.use(express.json());

app.get('/favicon.ico', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/favicon.ico'));
app.get('/runtime-es2015.js', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/runtime-es2015.js'));
app.get('/polyfills-es2015.js', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/polyfills-es2015.js'));
app.get('/styles-es2015.js', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/styles-es2015.js'));
app.get('/vendor-es2015.js', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/vendor-es2015.js'));
app.get('/main-es2015.js', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/main-es2015.js'));
app.get('/runtime-es2015.js.map', (req: any, res: any)=> res.sendFile(__dirname+'/dist/spinnerApp/runtime-es2015.js.map'));
app.get('/scripts.js', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/scripts.js'));
app.get('/Roboto.ttf', (req: any, res: any) => res.sendFile(__dirname + '/dist/spinnerApp/assets/fonts/'+req.originalUrl));
app.get('/Rancho.ttf', (req: any, res: any) => res.sendFile(__dirname + '/dist/spinnerApp/assets/fonts/'+req.originalUrl));
app.get('/assets/images/*', (req: any, res: any) => res.sendFile(__dirname + '/dist/spinnerApp/' + req.originalUrl));
app.get('/*', (req: any, res: any) => res.sendFile(__dirname+'/dist/spinnerApp/index.html'));

const PORT = process.env.PORT || 4201;
app.listen(PORT, () => console.log('Server Listening on '+PORT));
