import express from 'express';
import cors from 'cors';

import { router as goodsRouter} from './routes/goods';
import { router as colorsRouter} from './routes/colors';
import serverless from 'serverless-http';

const app = express();

app.use(cors());
app.use('/goods', express.json(), goodsRouter);
app.use('/colors', colorsRouter);

app.listen(5000);

export const handler = serverless(app);
