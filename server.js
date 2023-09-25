const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);

  // Defina tipos de conteúdo para diferentes extensões de arquivo
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
  };

  // Defina um tipo de conteúdo padrão
  const defaultContentType = 'application/octet-stream';

  // Verifique se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Arquivo não encontrado
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else {
      // Defina o tipo de conteúdo com base na extensão do arquivo
      res.writeHead(200, { 'Content-Type': contentType[extname] || defaultContentType });

      // Leia e envie o conteúdo do arquivo
      fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('<h1>500 Internal Server Error</h1>');
        } else {
          res.end(content);
        }
      });
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
