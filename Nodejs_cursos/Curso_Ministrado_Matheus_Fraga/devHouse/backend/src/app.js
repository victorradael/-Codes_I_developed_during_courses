import express from 'express';
import mongoose from 'mongoose';
import { connect } from './cred.json'
import routes from './routes';

class App {

    constructor() {
        this.server = express();

        mongoose.connect(connect,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server;