import * as express from 'express';
import * as bodyParser from 'body-parser';
import requestVerifier from './middlewares/alexa-verifier';
import { requestHandler } from './request-handler/request-handler';

const app = express();

app.use(bodyParser.json({
    verify: function getRawBody(req, res, buf) {
        req.rawBody = buf.toString();
    }
}));

app.post('/forecast', requestVerifier, function(req, res) {
    res.json(requestHandler(req));
});

console.log('App listening on port 3000');
app.listen(3000);
