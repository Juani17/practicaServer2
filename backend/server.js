import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const staticPath = path.join(__dirname, '..', 'frontend', 'serverFront', 'dist');

console.log('Serving static files from:', staticPath);

app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile(join(staticPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
