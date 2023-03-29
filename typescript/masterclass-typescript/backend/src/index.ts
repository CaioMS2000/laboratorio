import express from 'express';
import cors from 'cors';

import routes from './routes';

const PORT = 8003;
const app = express();

app.use(cors())
app.use(routes)
app.listen(PORT)

console.log(`Node listenning on http://localhost:${PORT}`)